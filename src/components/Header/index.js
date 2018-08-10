import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Gradient from "../Gradient";
import Row from "../Grid/Row";
import Container from "../Grid/Container";
import { mediumAndUp, smallAndUp } from "../../theme/mediaQueries";

const HeaderGradient = Gradient.extend`
  display: flex;
  position: relative;
  align-items: flex-end;
  min-height: 122px;
  ${smallAndUp`
    min-height: 140px;
  `} ${mediumAndUp`
    min-height: 218px;
  `};
`.withComponent("header");

const HeaderContainer = Container.extend`
  padding-top: 60px;
`;

const Header = ({ deg, from, to, children, className, style, withOverlay }) => (
  <HeaderGradient
    deg={deg}
    from={from}
    to={to}
    style={style}
    className={classNames({ "gradient--overlay": withOverlay }, className)}
  >
    <HeaderContainer>
      <Row>{children}</Row>
    </HeaderContainer>
  </HeaderGradient>
);

Header.propTypes = {
  ...Gradient.propTypes,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  withOverlay: PropTypes.bool
};

Header.defaultProps = {
  className: null,
  style: {},
  withOverlay: false
};

export default Header;
