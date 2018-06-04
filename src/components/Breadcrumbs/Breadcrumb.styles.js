import { ListUnstyled } from "../List";
import { typography } from "../../theme";
import spacing from "../../theme/spacing";

const StyledBreadcrumb = ListUnstyled.extend`
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.semiBold};
  display: flex;
  flex-flow: row;

  li:not(:last-of-type):after {
    padding: 0 ${spacing.slim};
    content: "/";
  }
`;

export default StyledBreadcrumb;
