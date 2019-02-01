import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StyledBadge from "./Badge.styles";
import StarIcon from "../Icons/Star";
import { SIZES, REGULAR, BUTTON_VARIANTS, STANDARD } from "../constants";

const StyledBadgeRating = styled(StyledBadge)`
  padding: 0;

  &:hover {
    opacity: 0.5;
  }
`;

const ContentWrapper = styled.span`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.span`
  padding-left: 2px;
`;

const StyledStarIcon = styled(StarIcon)`
  flex: 0 0 auto;
  line-height: 1;
`;

const RatingBadge = ({
  variant,
  children,
  ratingValue,
  bestRating,
  ratingCount,
  ...props
}) => (
  <StyledBadgeRating
    itemProp="aggregateRating"
    itemScope
    itemType="https://schema.org/AggregateRating"
    variant={variant}
    {...props}
  >
    <ContentWrapper>
      <StyledStarIcon size={12} />
      <Container>{children}</Container>
      {ratingValue && <meta itemProp="ratingValue" content={ratingValue} />}
      {bestRating && <meta itemProp="bestRating" content={bestRating} />}
      {ratingCount && <meta itemProp="ratingCount" content={ratingCount} />}
    </ContentWrapper>
  </StyledBadgeRating>
);

RatingBadge.propTypes = {
  children: PropTypes.node.isRequired,
  ratingValue: PropTypes.string.isRequired,
  bestRating: PropTypes.string,
  ratingCount: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES)
};

RatingBadge.defaultProps = {
  variant: STANDARD,
  size: REGULAR,
  bestRating: "5"
};

export default RatingBadge;
