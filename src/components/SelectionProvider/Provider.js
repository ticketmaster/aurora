import React from "react";
import PropTypes from "prop-types";
import { Provider } from "./Context";

export default class ItemSelectionProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    isMultiSelect: PropTypes.bool.isRequired,
    value: PropTypes.arrayOf(PropTypes.string) // eslint-disable-line
  };

  static defaultProps = {
    onChange: null,
    value: []
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.value || !props.value.length) return null;

    if (props.isMultiSelect) {
      if (state.firstUpdate === true) {
        return {
          selected: [...props.value, ...state.selected],
          firstUpdate: false
        };
      }
    }

    if (state.selected.length === 0 && state.firstUpdate === true)
      return { selected: [...props.value] };

    return null;
  }

  componentDidUpdate() {
    this.props.onChange && this.props.onChange(this.state.selected); // eslint-disable-line
  }
  onClick = ({ value }) => {
    if (!this.props.isMultiSelect) {
      this.setState({ selected: [value] });
      return;
    }
    if (!this.state.selected.includes(value)) {
      this.setState({ selected: [...this.state.selected, value] });
      return;
    }
    const { selected } = this.state;
    const index = selected.indexOf(value);
    this.setState({
      selected: [...selected.slice(0, index), ...selected.slice(index + 1)]
    });
  };

  /* eslint-disable */
  state = {
    selected: [],
    onClick: this.onClick,
    firstUpdate: true,
    children: []
  };
  /* eslint-enable */

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
