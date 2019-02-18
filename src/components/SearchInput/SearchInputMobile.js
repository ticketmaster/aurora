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

    searchClick = e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState(
        {
          isMobileVisible: true
        },
        () => this.mobileRef.current.focusInput()
      );
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
          <div onClickCapture={this.searchClick}>
            {!isMobileVisible && (
              <SearchComponent {...this.props} isMobile={false} />
            )}
          </div>
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
