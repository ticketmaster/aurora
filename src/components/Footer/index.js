import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";
import Container from "../Grid/Container";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.blackPearl};
`;

const Footer = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
