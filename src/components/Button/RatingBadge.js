import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StyledBadge from "./Badge.styles";
import StarIcon from "../Icons/Star";
import BUTTON_VARIANTS from "./constants";

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
  <StyledBadge
    itemProp="aggregateRating"
    itemScope
    itemType="https://schema.org/AggregateRating"
    variant={variant}
    {...props}
  >
    <StyledStarIcon size={12} />
    <Container>{children}</Container>
    {ratingValue && <meta itemProp="ratingValue" content={ratingValue} />}
    {bestRating && <meta itemProp="bestRating" content={bestRating} />}
    {ratingCount && <meta itemProp="ratingCount" content={ratingCount} />}
  </StyledBadge>
);

RatingBadge.propTypes = {
  children: PropTypes.node.isRequired,
  ratingValue: PropTypes.string.isRequired,
  bestRating: PropTypes.string,
  ratingCount: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANTS)
};

RatingBadge.defaultProps = {
  variant: "standard",
  bestRating: "5"
};

export default RatingBadge;
