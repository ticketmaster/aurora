import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Badge, { StyledBadge } from "./Badge";
import Tooltip from "../Tooltip";
import { themes } from "../../theme";

import { badgeTypes, badgeProps } from "./constants";

const StatusBadgeCotainer = styled.div`
  display: flex;
  .badge {
    margin-left: 8px;

    &:first-child,
    &.hidden {
      margin-left: 0px;
    }

    &.hidden {
      margin-top: 8px;
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

class StatusBadge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };
  }

  mouseLeave = () => {
    this.setState({
      isOpened: false
    });
  };

  elementHovered = e => {
    const data = Tooltip.getDimensionsFromEvent(e);
    this.setState({
      isOpened: true,
      ...data
    });
  };

  render() {
    const { visibleBadges, hiddenBadges, tooltipDirection, type } = this.props;
    const { isOpened, ...position } = this.state;

    return (
      <StatusBadgeCotainer>
        {visibleBadges.map(item => (
          <Badge {...item} type={type} key={item.label} />
        ))}
        {hiddenBadges &&
          hiddenBadges.length && (
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
          isVisible={isOpened}
        >
          {hiddenBadges.map(item => (
            <Badge className="hidden" {...item} type={type} key={item.label} />
          ))}
        </BadgeTooltip>
      </StatusBadgeCotainer>
    );
  }
}

StatusBadge.propTypes = {
  type: PropTypes.oneOf(Object.values(badgeTypes)),
  visibleBadges: PropTypes.arrayOf(PropTypes.shape({ ...badgeProps })),
  hiddenBadges: PropTypes.arrayOf(PropTypes.shape({ ...badgeProps })),
  tooltipDirection: PropTypes.oneOf(
    Object.values({
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right"
    })
  )
};

StatusBadge.defaultProps = {
  type: badgeTypes.dark,
  visibleBadges: [],
  hiddenBadges: [],
  tooltipDirection: "bottom"
};

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
