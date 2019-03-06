import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StatusBadge, { StyledBadge } from "./StatusBadge";
import Tooltip from "../Tooltip";
import { themes, spacing } from "../../theme";

import { badgeProps } from "./constants";
import { VARIANTS, DARK, DIRECTIONS } from "../constants";

const StatusBadgeContainer = styled.div`
  display: flex;

  & .badge {
    margin-left: ${spacing.cozy};

    &:first-child,
    &.hidden {
      margin-left: 0;
    }

    &.hidden {
      margin-top: ${spacing.cozy};
      :first-child {
        margin-top: 0;
      }
    }
  }
`;

const HiddenBadgesCount = styled(StyledBadge)`
  background: ${themes.global.transparent};
  color: ${themes.global.onyx.light};
`;

const BadgeTooltip = styled(Tooltip)`
  padding: 8px;
`;

class StatusBadgeGroup extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(VARIANTS),
    visibleBadges: PropTypes.arrayOf(PropTypes.shape(badgeProps)),
    hiddenBadges: PropTypes.arrayOf(PropTypes.shape(badgeProps)),
    tooltipDirection: PropTypes.oneOf(DIRECTIONS)
  };

  static defaultProps = {
    variant: DARK,
    visibleBadges: [],
    hiddenBadges: [],
    tooltipDirection: "bottom"
  };

  state = {
    isOpen: false
  };

  componentWillUnmount() {
    document.body.removeEventListener("touchstart", this.mouseLeave);
  }

  mouseLeave = e => {
    e.stopPropagation();
    document.body.removeEventListener("touchstart", this.mouseLeave);
    this.setState(() => ({
      isOpen: false
    }));
  };

  elementHovered = e => {
    const data = Tooltip.getDimensionsFromEvent(e);
    // on some devices both onMouseEnter and onTouchStart would be triggered
    // it needs to be checked
    this.setState(state => {
      if (state.isOpen) {
        return state;
      }

      document.body.addEventListener("touchstart", this.mouseLeave);
      return {
        isOpen: true,
        ...data
      };
    });
  };

  renderBadges = (badges, variant, additionalClass) =>
    badges.map(item => (
      <StatusBadge
        className={additionalClass}
        {...item}
        variant={variant}
        key={item.label}
      />
    ));

  render() {
    const {
      visibleBadges,
      hiddenBadges,
      tooltipDirection,
      variant
    } = this.props;
    const { isOpen, ...position } = this.state;

    return (
      <StatusBadgeContainer>
        {this.renderBadges(visibleBadges, variant)}
        {hiddenBadges &&
          hiddenBadges.length > 0 && (
            <HiddenBadgesCount
              onMouseEnter={this.elementHovered}
              onMouseLeave={this.mouseLeave}
              onTouchStart={this.elementHovered}
            >
              {`+${hiddenBadges.length} more`}
            </HiddenBadgesCount>
          )}
        <BadgeTooltip
          direction={tooltipDirection}
          position={{ ...position }}
          isVisible={isOpen}
        >
          {this.renderBadges(hiddenBadges, variant, "hidden")}
        </BadgeTooltip>
      </StatusBadgeContainer>
    );
  }
}

export default StatusBadgeGroup;
