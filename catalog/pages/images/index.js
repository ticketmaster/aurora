import React from "react";
import { pageLoader } from "catalog";
import styled, { keyframes } from "styled-components";

import { Image } from "../../../src/";
import colors from "../../../src/theme/colors";

const fadeAndBounce = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingCircle = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: ${colors.azure.base};
  border-radius: 50%;
  animation: ${fadeAndBounce} 0.6s infinite alternate;
`;

const Loader = () => (
  <LoaderWrapper>
    <LoadingCircle />
    <LoadingCircle style={{ animationDelay: "0.2s" }} />
    <LoadingCircle style={{ animationDelay: "0.4s" }} />
  </LoaderWrapper>
);

export default {
  path: "/images",
  title: "Images",
  imports: {
    Image,
    Loader
  },
  content: pageLoader(() => import("./index.md"))
};
