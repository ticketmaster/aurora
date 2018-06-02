import styled from "styled-components";
import spacing from "../../theme/spacing";

const StyledBreadcrumbItem = styled.li`
  padding: 0 ${spacing.slim};

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

export default StyledBreadcrumbItem;
