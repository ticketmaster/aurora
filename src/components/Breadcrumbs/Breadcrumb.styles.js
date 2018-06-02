import { ListUnstyled } from "../List";
import { typography } from "../../theme";

const StyledBreadcrumb = ListUnstyled.extend`
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.semiBold};
  display: flex;
  flex-flow: row;
`;

export default StyledBreadcrumb;
