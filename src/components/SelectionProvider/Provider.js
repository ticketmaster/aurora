import React from "react";
import PropTypes from "prop-types";

import { Provider } from "./Context";
import { updateOpenIndexMultiple } from "../List/helper";

export default class ItemSelectionProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    isMultiSelect: PropTypes.bool.isRequired,
    value: PropTypes.arrayOf(PropTypes.string), // eslint-disable-line
    valueOverride: PropTypes.arrayOf(PropTypes.string) // eslint-disable-line
  };

  static defaultProps = {
    value: [],
    valueOverride: null,
    onChange: null
  };

  constructor(props) {
    super(props);
    const { value, valueOverride } = props;

    this.state = {
      selected: Array.isArray(valueOverride) ? valueOverride : value
    };
  }

  static getDerivedStateFromProps(props) {
    const { valueOverride } = props;

    return Array.isArray(valueOverride)
      ? {
          selected: valueOverride
        }
      : null;
  }

  componentDidMount = () => {
    this.setState({
      onClick: this.onClick // eslint-disable-line
    });
  };

  onClick = ({ value }) => {
    const { isMultiSelect, onChange } = this.props;
    const { selected } = this.state;
    const updatedSelections = isMultiSelect
      ? updateOpenIndexMultiple(selected, value)
      : [value];

    this.setState({
      selected: updatedSelections
    });
    if (onChange) onChange(updatedSelections);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
