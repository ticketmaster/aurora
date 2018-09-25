import React from "react";
import PropTypes from "prop-types";

const Membership = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <g fill="none" fillRule="evenodd" transform="translate(1 1.85)">
      <circle cx="12" cy="12" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <path
        fill={color}
        d="M15.836 7.625L15.39 9l.445 1.375-1.172.852-.266.82v7.351a.417.417 0 0 1-.054.207.336.336 0 0 1-.156.145.458.458 0 0 1-.188.047.44.44 0 0 1-.219-.063l-2.18-1.453-2.18 1.453a.385.385 0 0 1-.202.067.408.408 0 0 1-.211-.051.369.369 0 0 1-.153-.145.396.396 0 0 1-.058-.207v-7.351l-.266-.82-1.164-.852L7.813 9l-.446-1.375 1.164-.852.453-1.375h1.446l1.172-.851 1.171.851h1.446l.445 1.375 1.172.852zm-4.016 9.844l1.782 1.187v-6.054h-.829l-1.171.851-1.172-.851h-.828v6.054l1.773-1.187a.383.383 0 0 1 .445 0zm3.078-7.399L14.547 9l.351-1.07-.914-.664-.343-1.07h-1.133l-.906-.665-.915.664H9.563l-.344 1.07-.914.665L8.648 9l-.343 1.07.914.664.344 1.07h1.124l.915.665.906-.664h1.094v-.008h.039l.343-1.063.914-.664z"
      />
    </g>
  </svg>
);

Membership.displayName = "MembershipIcon";

Membership.defaultProps = {
  color: "currentColor",
  children: null
};

Membership.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Membership;
