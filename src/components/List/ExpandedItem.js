import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, colors, typography } from "../../theme";

import { Row, Column } from "../Grid";
import { SecondaryText, BoldText, Link } from "../Text";
import { mediumAndUp } from "../../theme/mediaQueries";

const MAX_COLUMNS = 12;

const ExpandedItemWrapper = styled(Column)`
  padding: ${spacing.moderate};
  border-bottom: 1px solid ${colors.lightGray};

  ${mediumAndUp`
    border: none;
    padding: ${spacing.moderate} 0 ${spacing.moderate} 0;
  `};
`;

const ItemContainer = styled(Row)`
  align-items: center;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  &:not(:last-of-type) {
    margin-bottom: ${spacing.moderate};
  }
`;

const TitleContainer = styled(Column)`
  padding-bottom: ${spacing.moderate};
`;

const TitleText = styled(BoldText)`
  font-size: ${typography.size.uno};
  color: ${colors.onyx.light};
  text-transform: uppercase;
`;

const ExpandedItem = ({ title, items, totalSections }) => {
  const noOfColumns = MAX_COLUMNS / totalSections;
  return (
    <ExpandedItemWrapper medium={noOfColumns}>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>

      {items.map(item => (
        <ItemContainer
          key={item.title}
          role="link"
          aria-label="Expanded Section Item"
          onClick={item.onItemClick ? item.onItemClick : null}
        >
          <Column
            small={1.5}
            medium={totalSections / 1.2}
            large={totalSections / 1.7}
            xLarge={totalSections / 2.5}
          >
            {item.icon}
          </Column>
          <Column
            small={10.5}
            medium={MAX_COLUMNS - totalSections / 1.2}
            large={MAX_COLUMNS - totalSections / 1.7}
            xLarge={MAX_COLUMNS - totalSections / 2.5}
          >
            {item.onItemClick ? (
              <Link href="/">{item.title}</Link>
            ) : (
              <SecondaryText>{item.title}</SecondaryText>
            )}
            {item.subTitle ? (
              <SecondaryText>{item.subTitle}</SecondaryText>
            ) : null}
          </Column>
        </ItemContainer>
      ))}
    </ExpandedItemWrapper>
  );
};

ExpandedItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string
    })
  ).isRequired,
  totalSections: PropTypes.number.isRequired
};

export default ExpandedItem;
