import { ListUnstyled } from "../List";
import typography from "../../theme/typography";
import spacing from "../../theme/spacing";

const StyledBreadcrumb = ListUnstyled.extend`
  font-weight: ${typography.weight.semiBold};
  display: flex;
  flex-flow: row;
  color: ${({ color }) => color || "inherit"};
  ${({ childrenLen }) =>
    childrenLen &&
    `
    flex: 0 1 ${Math.floor(100 / childrenLen)}%;
  `} align-items: center;

  li:last-of-type {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li:not(:last-of-type):after {
    padding: 0 ${spacing.slim};
    content: "/";
    font-size: ${typography.size.uno};
  }
`;

export default StyledBreadcrumb;
