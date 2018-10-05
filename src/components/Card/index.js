import ContainerBlock from "../Container/Block.styles";
import { constants, themes, spacing } from "../../theme";

const Card = ContainerBlock.extend`
  border-radius: ${constants.borderRadius.large};
  background-color: ${themes.global.white.base};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);
  padding: ${spacing.moderate};
`;

Card.displayName = "Card";

export default Card;
