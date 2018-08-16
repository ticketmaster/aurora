import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

import SearchIcon from "../Icons/Search";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import constants from "../../theme/constants";
import composeEventHandlers from "../../utils/composeEventHandlers";

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
  color: ${props => (props.invert ? colors.onyx.base : colors.white.base)};
  border: 0;
  font-size: ${props =>
    props.slim ? typography.size.hecto : typography.size.kilo};
  &:focus {
    background-color: ${colors.white.base};
    color: ${colors.onyx.base};
    &::placeholder {
      color: #26262699;
    }
    outline: 0;
  }
  /* stylelint-disable */
  &::placeholder {
    color: ${props => (props.invert ? "#26262699" : colors.white.base)};
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
  width: 100%;
  height: ${props => (props.slim ? "36px" : "auto")};
  border-radius: ${props =>
    props.slim ? constants.borderRadius.large : constants.borderRadius.small};
  overflow: hidden;
  outline: 0;
  border: ${props => (props.invert ? `1px solid #bfbfbf` : "0")};
  color: ${props => (props.invert ? colors.onyx.base : colors.white.base)};
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
  color: ${props => (props.invert ? colors.onyx.base : colors.white.base)};

  .search--focus & {
    color: ${colors.onyx.base};
  }
`;

export default class SearchInput extends React.Component {
  static propTypes = {
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    slim: PropTypes.bool,
    invert: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    onBlur: null,
    onFocus: null,
    slim: false,
    invert: false,
    className: null
  };

  state = { isFocused: false };

  onBlur = () =>
    this.setState(() => ({
      isFocused: false
    }));

  onFocus = () =>
    this.setState(() => ({
      isFocused: true
    }));

  render() {
    const { slim, invert, className, ...props } = this.props;
    return (
      <Container
        slim={slim}
        invert={invert}
        className={classNames(
          { "search--focus": this.state.isFocused },
          className
        )}
      >
        <IconContainer slim={slim} invert={invert}>
          <SearchIcon size={16} />
        </IconContainer>
        <Input
          {...{
            ...props,
            onBlur: composeEventHandlers(this.onBlur, props.onBlur),
            onFocus: composeEventHandlers(this.onFocus, props.onFocus),
            slim,
            invert
          }}
        />
      </Container>
    );
  }
}
