import React, { Component } from "react";
import PropTypes from "prop-types";

import BottomSheet from "./";

class BottomSheetContainer extends Component {
  state = { visible: true };

  onCloseRequest = () => {
    this.props.onClose();
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { children } = this.props;
    return (
      <BottomSheet
        visible={this.state.visible}
        onCloseRequest={this.onCloseRequest}
      >
        {children}
      </BottomSheet>
    );
  }
}

BottomSheetContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default BottomSheetContainer;
