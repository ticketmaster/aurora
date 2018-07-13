import ContainerBlock from "../Container/Block.styles";
import constants from "../../theme/constants";

const Card = ContainerBlock.extend`
  border-radius: ${constants.borderRadius.large};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.16);
`;

export default Card;
