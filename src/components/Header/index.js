import React from "react";
import PropTypes from "prop-types";

import Gradient from "../Gradient";
import Row from "../Grid/Row";
import Container from "../Grid/Container";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const HeaderGradient = Gradient.extend`
  display: flex;
  align-items: flex-end;
  min-height: 122px;
  ${mediumAndUp`
    min-height: 140px;
  `} ${largeAndUp`
    min-height: 218px;
  `};
`.withComponent("header");

const HeaderContainer = Container.extend`
  padding-top: 60px;
`;

const Header = ({ deg, from, to, children, style }) => (
  <HeaderGradient deg={deg} from={from} to={to} style={style}>
    <HeaderContainer>
      <Row>{children}</Row>
    </HeaderContainer>
  </HeaderGradient>
);

Header.propTypes = {
  ...Gradient.propTypes,
  style: PropTypes.objectOf(PropTypes.string)
};

Header.defaultProps = {
  style: {}
};

export default Header;
