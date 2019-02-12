import React, { Component } from "react";
import SearchInput from "./index";
import DeviceSizeProvider from "../DeviceSize/Provider";
import { Consumer as DeviceSizeConsumer } from "../DeviceSize/Context";
import { MobileActiveSearch } from "./Search.styles";

function withMobileFeature(SearchComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isMobileVisible: false
      };

      this.mobileRef = React.createRef();
    }

    searchClick = e => {
      const { deviceSize } = this.props;
      if (deviceSize.isSmall || deviceSize.isXSmall) {
        e.preventDefault();
        e.stopPropagation();
        this.setState(
          {
            isMobileVisible: true
          },
          () => this.mobileRef.current.focusInput()
        );
      }
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
            {!isMobileVisible && <SearchComponent {...this.props} />}
          </div>
          {isMobileVisible && (
            <MobileActiveSearch>
              <SearchComponent
                {...this.props}
                cancelCallback={this.cancelClick}
                ref={this.mobileRef}
              />
            </MobileActiveSearch>
          )}
        </React.Fragment>
      );
    }
  };
}

export const SearchInputFeature = withMobileFeature(SearchInput);

const WithDeviceSize = props => (
  <DeviceSizeProvider fallbackDetection={() => ({ isXLarge: true })}>
    <DeviceSizeConsumer>
      {value => <SearchInputFeature deviceSize={value} {...props} />}
    </DeviceSizeConsumer>
  </DeviceSizeProvider>
);

WithDeviceSize.displayName = "SearchFeature";

export default WithDeviceSize;
