import styled from "styled-components";
import Flex from "../../Flex";
import Item from "./Item"

const Animation = styled(Flex)`
 position: relative;
`
Animation.Item = Item;
export default Animation;
