import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

const Container = styled.div.attrs({
  className: "container-block"
})`
  position: relative;
  overflow: hidden;
  background-color: ${colors.white.base};
`;

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
