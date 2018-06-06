import React from "react";
import PropTypes from "prop-types";

import StyledBadge from "./Badge.styles";
import BUTTON_VARIANTS from "./constants";

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
    {children}
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
