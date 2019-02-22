import styled from "styled-components";
import Flex from "../../Flex";
import Item from "./Item"

const Overlay = styled(Flex)`
 position: relative;
`
Overlay.Item = Item;
export default Overlay;
