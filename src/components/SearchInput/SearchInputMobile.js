import React, { Component } from "react";
import SearchInput from "./index";
import { MobileActiveSearch } from "./Search.styles";

function withMobile(SearchComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isMobileVisible: false
      };

      this.mobileRef = React.createRef();
    }

    openSearch = () => {
      const { onFocus } = this.props;
      this.setState(
        {
          isMobileVisible: true
        },
        () => this.mobileRef.current.focusInput()
      );
      onFocus();
    };

    cancelClick = () => {
      const { cancelCallback } = this.props;
      this.setState({
        isMobileVisible: false
      });

      cancelCallback();
    };

    render() {
      const { isMobileVisible } = this.state;
      return (
        <React.Fragment>
          {!isMobileVisible && (
            <SearchComponent
              {...this.props}
              onFocus={this.openSearch}
              isMobile={false}
            />
          )}
          {isMobileVisible && (
            <MobileActiveSearch>
              <SearchComponent
                {...this.props}
                cancelCallback={this.cancelClick}
                ref={this.mobileRef}
                isMobile
              />
            </MobileActiveSearch>
          )}
        </React.Fragment>
      );
    }
  };
}

const SearchInputMobile = withMobile(SearchInput);

SearchInputMobile.defaultProps = {
  cancelCallback: () => {}
};

SearchInputMobile.displayName = "SearchInputMobile";

export default SearchInputMobile;
