import styled from "styled-components";
import PropTypes from "prop-types";

import { themes, constants, spacing } from "../../theme";

const Container = styled.div.attrs({
  className: "container-block"
})`
  position: relative;
  overflow: hidden;
  background-color: ${themes.global.white.base};
  border-radius: ${constants.borderRadius.large};
  border: 1px solid ${themes.global.gray03};
  padding: ${spacing.moderate};
`;

Container.propTypes = {
  children: PropTypes.node.isRequired
};

Container.displayName = "ContainerBlock";

export default Container;
