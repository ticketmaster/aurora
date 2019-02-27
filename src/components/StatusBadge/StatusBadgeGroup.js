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
  .badge {
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
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.mouseLeave = this.mouseLeave.bind(this);
    this.elementHovered = this.elementHovered.bind(this);
  }

  mouseLeave() {
    this.setState({
      isOpen: false
    });
  }

  elementHovered(e) {
    const data = Tooltip.getDimensionsFromEvent(e);
    this.setState({
      isOpen: true,
      ...data
    });
  }

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

StatusBadgeGroup.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  visibleBadges: PropTypes.arrayOf(PropTypes.shape(badgeProps)),
  hiddenBadges: PropTypes.arrayOf(PropTypes.shape(badgeProps)),
  tooltipDirection: PropTypes.oneOf(DIRECTIONS)
};

StatusBadgeGroup.defaultProps = {
  variant: DARK,
  visibleBadges: [],
  hiddenBadges: [],
  tooltipDirection: "bottom"
};

StatusBadgeGroup.displayName = "StatusBadgeGroup";

export default StatusBadgeGroup;
