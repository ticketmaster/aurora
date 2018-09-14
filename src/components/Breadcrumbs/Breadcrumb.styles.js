import { ListUnstyled } from "../List";
import typography from "../../theme/typography";
import spacing from "../../theme/spacing";
import getThemeValue from "../../utils/getThemeValue";

const StyledBreadcrumb = ListUnstyled.extend`
  font-weight: ${typography.weight.semiBold};
  display: flex;
  flex-flow: row;
  align-items: center;

  &.breadcrumb--none {
    color: inherit;
  }

  &.breadcrumb--light {
    color: ${getThemeValue("white", "base")};
  }

  &.breadcrumb--dark {
    color: ${getThemeValue("onyx", "base")};
  }

  &.breadcrumb--accent {
    color: ${getThemeValue("primary", "base")};
  }

  li:last-of-type {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li:not(:last-of-type):after {
    padding: 0 ${spacing.slim};
    content: "/";
  }
`;

export default StyledBreadcrumb;
