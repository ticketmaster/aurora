import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import {mediumAndUp} from "../../theme/mediaQueries";

import ChevronIcon from "../Icons/Chevron";
import { CHEVRON_ICON_PADDING, CHEVRON_ICON_SIZE } from "./constants";

export const IconButton = styled.button.attrs({
  role: 'button',
  type: 'button',
})`
  border: 0;
  padding: 0 ${CHEVRON_ICON_PADDING};
  outline: 0;
  background: transparent;
  appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &.icon-button--last {
    padding-left: ${spacing.moderate};
    padding-right: 0;
  }

  > * {
    pointer-events: none;
  }
`;

const IconWrapper = styled(IconButton).attrs({
  size: 45
})`
  display: none;

  ${mediumAndUp`
    display: block;
    &.button--expanded,
    &.button--collapsed {
      transition: all 0.1s linear;
    }
    &.button--expanded {
      transform: rotate(-180deg);
    }
  `};
`;

export default class RowToggler extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    /**
     * Property onExpandItem is called whenever user clicks chevron on the collapsed item
     */
    onExpandItem: PropTypes.func,
    /**
     * Property onCollapseItem is called whenever user clicks chevron on the expanded item
     */
    onCollapseItem: PropTypes.func
  };

  static defaultProps = {
    onExpandItem: () => {},
    onCollapseItem: () => {}
  };

  handleClick = () => {
    const { isOpen, index, onExpandItem, onCollapseItem } = this.props;

    if (isOpen) {
      onCollapseItem({ index });
    } else {
      onExpandItem({ index });
    }
  };

  render() {
    const { isOpen, index } = this.props;

    return (
      <IconWrapper
        aria-label={isOpen ? "Collapse Row" : "Expand Row"}
        aria-expanded={isOpen}
        data-index={index}
        className={classnames("button--expand-or-collapse", {
          "button--expanded": isOpen,
          "button--collapsed": !isOpen
        })}
        onClick={this.handleClick}
      >
        <ChevronIcon size={CHEVRON_ICON_SIZE} color={colors.blackPearl} />
      </IconWrapper>
    );
  }
}
