import styled from "styled-components";

export const ContentWrapper = styled.div`
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};
`;
ContentWrapper.displayName = "ContentWrapper";

export const Wrapper = styled.div`
  position: relative;
`;
Wrapper.displayName = "Wrapper";
