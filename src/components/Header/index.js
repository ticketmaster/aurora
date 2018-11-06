import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Gradient from "../Gradient";
import Row from "../Grid/Row";
import Container from "../Grid/Container";
import { mediumAndUp, smallAndUp } from "../../theme/mediaQueries";

const HeaderStyles = styled.header`
  width: 100%;
  display: flex;
  position: relative;
`;

const HeaderGradient = styled(Gradient)`
  display: flex;
  position: relative;
  align-items: flex-end;
  min-height: 122px;
  z-index: 1;
  ${smallAndUp`
    min-height: 140px;
  `} ${mediumAndUp`
    min-height: 218px;
  `};
`;

const HeaderContainer = styled(Container)`
  padding-top: 60px;
  z-index: 2;
`;

const Header = ({
  deg,
  stops,
  children,
  className,
  style,
  withOverlay,
  withSpotLight
}) => (
  <HeaderStyles role="heading" aria-level="1">
    <HeaderGradient
      tagName="header"
      deg={deg}
      stops={stops}
      style={style}
      className={classNames(
        {
          "gradient--overlay": withOverlay,
          "gradient--spotlight": withSpotLight
        },
        className
      )}
    >
      <HeaderContainer>
        <Row>{children}</Row>
      </HeaderContainer>
    </HeaderGradient>
  </HeaderStyles>
);

Header.propTypes = {
  ...Gradient.propTypes,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  withOverlay: PropTypes.bool,
  withSpotLight: PropTypes.bool
};

Header.defaultProps = {
  className: null,
  style: {},
  withOverlay: false,
  withSpotLight: false
};

export default Header;
