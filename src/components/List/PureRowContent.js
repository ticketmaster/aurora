import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { Row, Column } from "../Grid";
import OverflowIcon from "../Icons/Overflow";
import { mediumAndUp } from "../../theme/mediaQueries";

import RowToggler, { IconButton } from "./RowToggler";
import constants from "../../theme/constants";

const RowWrapper = styled.div`
  background-color: ${colors.white.base};
  border-bottom: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  margin-bottom: -1px;
  padding: 0 ${spacing.cozy};
  &:first-child {
    border-top: 0px;
  }

  ${mediumAndUp`
    padding: 0 ${spacing.normal};
    &.row__wrapper--expanded {
      transition: box-shadow 0.3s ${
        constants.easing.easeInOutQuad
      }, margin-bottom 0.3s ${constants.easing.easeInOutQuad};
      margin-bottom: 3px;
      margin-top: 3px;
      border-radius: 4px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);
      border: 1px solid #ebebeb;
      overflow: hidden;
    }
    
    &.row__wrapper--collapsed {
      transition: box-shadow 0.3s ${
        constants.easing.easeInQuad
      }, margin-bottom 0.3s ${constants.easing.easeInQuad};
      box-shadow: 0;
      margin-bottom: -1px;
    }
  `};

  .button--expand-or-collapse {
    margin-right: ${props =>
      props.rowTriggerPosition === "right" ? "-16px" : "0"};
    margin-left: ${props =>
      props.rowTriggerPosition === "left" ? "-16px" : "0"};
  }
`;

const ListContainer = styled.div`
  background-color: ${colors.white.base};
  align-items: stretch;
  display: flex;
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.normal};
`;

const OverflowDesktopContainer = styled(Column)`
  max-height: 0;
  overflow: hidden;
  padding: 0;

  ${mediumAndUp`
    border-top: 1px solid ${colors.lightGray};
    padding: 0;

    &.container__overflow--expanded {
      background-color: ${colors.white.base};
      max-height: 600px;
      transition: max-height 0.3s ${
        constants.easing.easeInOutQuad
      }, opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    }

    &.container__overflow--collapsed {
      transition: max-height 0.3s ${
        constants.easing.easeInQuad
      }, opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    }
  `};
`;

const MobileContainer = styled.div`
  display: flex;
  align-items: stretch;
  ${mediumAndUp`
    display: none;
  `};
`;

const ContentRow = styled(Row)`
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-right: 0;
  ${mediumAndUp`
    margin-left: 0;
    margin-right: 0;
  `};
`;

class PureListRowContent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.isOpen && this.props.index !== prevProps.index) {
      this.props.resetOpenIndex();
    }
  }

  componentWillUnmount() {
    if (this.props.isOpen) {
      this.props.resetOpenIndex();
    }
  }

  render() {
    const {
      isOpen,
      index,
      onOverflowClick,
      children,
      onExpandItem,
      onCollapseItem,
      rowTriggerPosition,
      header,
      ...rest
    } = this.props;

    return (
      <RowWrapper
        className={classnames({
          row__wrapper: true,
          "row__wrapper--expanded": isOpen,
          "row__wrapper--collapsed": !isOpen
        })}
        rowTriggerPosition={rowTriggerPosition}
        {...rest}
      >
        {/* this class name is for automation purposes please do not remove or modify the name */}
        <ListContainer className="list__container">
          {rowTriggerPosition === "left" && (
            <RowToggler
              isOpen={isOpen}
              index={index}
              onExpandItem={onExpandItem}
              onCollapseItem={onCollapseItem}
              className="row__toggler"
            />
          )}

          <ContentRow
            rowTriggerPosition={rowTriggerPosition}
            className="row__content"
          >
            {header}
          </ContentRow>

          <MobileContainer>
            <IconButton
              className="button--more-info icon-button--last"
              data-index={index}
              aria-label="More Info"
              onClick={onOverflowClick}
            >
              <OverflowIcon size={22} color={colors.onyx.light} />
            </IconButton>
          </MobileContainer>

          {rowTriggerPosition === "right" && (
            <RowToggler
              isOpen={isOpen}
              index={index}
              onExpandItem={onExpandItem}
              onCollapseItem={onCollapseItem}
              className="row__toggler"
            />
          )}
        </ListContainer>

        <OverflowDesktopContainer
          className={classnames({
            container__overflow: true,
            "container__overflow--expanded": isOpen,
            "container__overflow--collapsed": !isOpen
          })}
        >
          {children}
        </OverflowDesktopContainer>
      </RowWrapper>
    );
  }
}

PureListRowContent.defaultProps = {
  isOpen: false,
  children: null,
  rowTriggerPosition: "right",
  onExpandItem: RowToggler.defaultProps.onExpandItem,
  onCollapseItem: RowToggler.defaultProps.onCollapseItem
};

PureListRowContent.propTypes = {
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  onExpandItem: RowToggler.propTypes.onExpandItem,
  onCollapseItem: RowToggler.propTypes.onCollapseItem,
  resetOpenIndex: PropTypes.func.isRequired,
  rowTriggerPosition: PropTypes.oneOf(["right", "left"])
};

export default PureListRowContent;
