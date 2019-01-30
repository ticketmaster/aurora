import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const PlayIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <rect x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M7.75948907,4.84963048 C7.68126674,4.80213835 7.59151085,4.77702424 7.5,4.77702424 C7.22385763,4.77702424 7,5.00088186 7,5.27702424 L7,18.7229758 C7,18.8144866 7.02511411,18.9042425 7.07260624,18.9824648 C7.2159181,19.2185079 7.52344601,19.2936814 7.75948907,19.1503695 L18.8326256,12.4273938 C18.9012645,12.3857202 18.9588567,12.3281279 19.0005303,12.2594891 C19.1438422,12.023446 19.0686687,11.7159181 18.8326256,11.5726062 L7.75948907,4.84963048 Z M8.2784672,3.99484297 L19.3516037,10.7178187 C20.0597329,11.1477543 20.2852534,12.070338 19.8553178,12.7784672 C19.730297,12.9843838 19.5575204,13.1571605 19.3516037,13.2821813 L8.2784672,20.005157 C7.57033804,20.4350926 6.64775429,20.2095721 6.21781873,19.501443 C6.07534234,19.266776 6,18.9975083 6,18.7229758 L6,5.27702424 C6,4.44859711 6.67157288,3.77702424 7.5,3.77702424 C7.77453254,3.77702424 8.04380021,3.85236658 8.2784672,3.99484297 Z"
        />
      </g>
    </g>
  </svg>
);

PlayIcon.displayName = "PlayIcon";

PlayIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

PlayIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default PlayIcon;
