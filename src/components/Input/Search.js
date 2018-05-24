import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SearchIcon from "../Icons/Search";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import constants from "../../theme/constants";

const Input = styled.input.attrs({
  type: "search"
})`
  display: inline-block;
  width: 100%;
  padding: ${props =>
    props.slim
      ? "9px 12px 9px calc(12px + 12px + 10px)"
      : "14px 16px 14px calc(16px + 16px + 8px)"};
  background-color: transparent;
  border: 0;
  color: ${props => (props.invert ? colors.onyx.base : colors.white.base)};
  font-size: ${props =>
    props.slim ? typography.size.hecto : typography.size.kilo};
  /* stylelint-disable */
  &:focus {
    background-color: ${colors.white.base};
    color: ${colors.onyx.base};
    &::placeholder {
      color: ${colors.onyx.base};
    }
    outline: 0;
  }
  &::placeholder {
    color: ${props => (props.invert ? colors.onyx.base : colors.white.base)};
  }
  &::ms-clear {
    display: none;
  }
  &::-webkit-search-cancel-button {
    display: none;
  }
  /* stylelint-enable */
`;

const Container = styled.div`
  position: relative;
  border-radius: ${props =>
    props.slim ? constants.borderRadius.large : constants.borderRadius.small};
  overflow: hidden;
  outline: 0;
  border: 0;
  background-color: ${props =>
    props.invert ? colors.white.base : colors.white.lighter};
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: ${props => (props.slim ? "12px" : "16px")};
`;

const composeHandler = (...args) => e => {
  args.forEach(fn => fn && fn(e));
};

export default class SearchInput extends React.Component {
  static propTypes = {
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    slim: PropTypes.bool,
    invert: PropTypes.bool
  };

  static defaultProps = {
    onBlur: null,
    onFocus: null,
    slim: false,
    invert: false
  };

  state = { color: this.props.invert ? colors.onyx.base : colors.white.base };

  onBlur = () =>
    this.setState((_, props) => ({
      color: props.invert ? colors.onyx.base : colors.white.base
    }));

  onFocus = () =>
    this.setState(() => ({
      color: colors.onyx.base
    }));

  render() {
    const { slim, invert, ...props } = this.props;
    return (
      <Container slim={slim} invert={invert}>
        <IconContainer slim={slim}>
          <SearchIcon color={this.state.color} size={16} />
        </IconContainer>
        <Input
          {...{
            ...props,
            onBlur: composeHandler(this.onBlur, props.onBlur),
            onFocus: composeHandler(this.onFocus, props.onFocus),
            slim,
            invert
          }}
        />
      </Container>
    );
  }
}
