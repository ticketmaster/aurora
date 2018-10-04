import React from "react";
import { PropTypes } from "prop-types";
import { allSizes, types } from "./iconConstants";
import { themes } from "../../theme";

const alertIcons = {
  outline: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h16v16H0z" />
          <path
            fill={color}
            d="M1.968 12.524a.384.384 0 0 0-.055.198.4.4 0 0 0 .405.393h11.364a.415.415 0 0 0 .204-.053.387.387 0 0 0 .146-.538L8.35 3.08a.413.413 0 0 0-.7 0l-5.682 9.444zm-.788-.446L6.86 2.634a1.341 1.341 0 0 1 1.803-.46c.196.111.36.27.474.46l5.682 9.444c.367.61.155 1.392-.474 1.748a1.35 1.35 0 0 1-.664.174H2.318C1.59 14 1 13.428 1 12.722c0-.226.062-.449.18-.644zM8 11.831a.685.685 0 1 0 0-1.37.685.685 0 0 0 0 1.37zm0-2.255a.684.684 0 0 0 .684-.684v-2.17a.684.684 0 1 0-1.369 0v2.17c0 .378.307.684.685.684z"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M2.041 19.13a.612.612 0 0 0-.085.313.63.63 0 0 0 .637.623h18.814a.648.648 0 0 0 .32-.084.615.615 0 0 0 .231-.851L12.551 3.245a.645.645 0 0 0-1.103 0L2.042 19.131zm-.827-.467l9.407-15.886a1.613 1.613 0 0 1 2.757 0l9.407 15.886c.441.744.181 1.697-.58 2.127a1.62 1.62 0 0 1-.798.21H2.593C1.713 21 1 20.303 1 19.443c0-.274.074-.543.214-.78zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1V8.5a1 1 0 0 0-2 0V13a1 1 0 0 0 1 1z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h36v36H0z" />
          <path
            fill={color}
            d="M2.111 30.88a.957.957 0 0 0-.127.478c0 .535.44.969.983.969h30.066c.17 0 .337-.044.484-.126a.96.96 0 0 0 .371-1.32L18.856 4.754a.992.992 0 0 0-1.711 0L2.11 30.88zm-.855-.477L16.288 4.278a1.983 1.983 0 0 1 3.423 0l15.033 26.125c.536.93.204 2.113-.742 2.64a1.99 1.99 0 0 1-.97.252H2.968C1.881 33.295 1 32.428 1 31.358c0-.335.088-.664.256-.955zM18 29.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-4.908a1.5 1.5 0 0 0 1.5-1.5V13.5a1.5 1.5 0 0 0-3 0v9.592a1.5 1.5 0 0 0 1.5 1.5z"
          />
        </g>
      </svg>
    )
  },
  filled: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h16v16H0z" />
          <path
            fill={color}
            d="M1.05 13.33L7.617 2.195a.444.444 0 0 1 .766 0L14.95 13.33a.444.444 0 0 1-.383.67H1.433a.444.444 0 0 1-.383-.67zM8 12.443a.783.783 0 0 0 .787-.778.783.783 0 0 0-.787-.779.783.783 0 0 0-.787.779c0 .43.352.778.787.778zM8 9.85a.787.787 0 0 0 .787-.787V6.484a.787.787 0 1 0-1.574 0v2.578c0 .434.352.787.787.787z"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M1.074 19.997l10.35-17.7a.667.667 0 0 1 1.151 0l10.35 17.7A.667.667 0 0 1 22.35 21H1.65a.667.667 0 0 1-.576-1.003zM12 18.65c.578 0 1.047-.464 1.047-1.036 0-.573-.469-1.037-1.047-1.037s-1.047.464-1.047 1.037c0 .572.469 1.036 1.047 1.036zm0-4.127c.578 0 1.047-.469 1.047-1.047v-5.16a1.047 1.047 0 1 0-2.093 0v5.16c0 .578.468 1.047 1.046 1.047z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h36v36H0z" />
          <path
            fill={color}
            d="M1.107 31.504L17.132 3.455a1 1 0 0 1 1.736 0l16.025 28.049A1 1 0 0 1 34.024 33H1.975a1 1 0 0 1-.868-1.496zM18 29.894a1.56 1.56 0 0 0 1.566-1.554A1.56 1.56 0 0 0 18 26.787a1.56 1.56 0 0 0-1.566 1.553A1.56 1.56 0 0 0 18 29.894zm0-5.178c.865 0 1.566-.701 1.566-1.566V12.82a1.566 1.566 0 1 0-3.132 0v10.33c0 .865.701 1.566 1.566 1.566z"
          />
        </g>
      </svg>
    )
  }
};

const AlertIcon = ({ type, size, children, ...props }) =>
  alertIcons[type][size](themes.global.caution.base, children, props);

AlertIcon.displayName = "AlertIcon";

AlertIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null
};

AlertIcon.propTypes = {
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(allSizes),
  children: PropTypes.node
};

export default AlertIcon;
