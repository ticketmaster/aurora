import { ListUnstyled } from "../List";
import typography from "../../theme/typography";
import spacing from "../../theme/spacing";

const StyledBreadcrumb = ListUnstyled.extend`
  font-weight: ${typography.weight.semiBold};
  display: flex;
  flex-flow: row;
  align-items: center;
  color: ${props => props.color || "inherit"};

  li:not(:last-of-type):after {
    padding: 0 ${spacing.slim};
    content: "/";
    font-size: ${typography.size.uno};
  }
`;

export default StyledBreadcrumb;
