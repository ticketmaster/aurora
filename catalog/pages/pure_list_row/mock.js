import React from "react";
import styled from "styled-components";

import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";

export const Header = styled.div`
  width: 100%;
  background: #f7eded9e;
`;

export const listItems = [
  {
    header: (
      <Header>
        <ThumbnailCircleImage
          size={40}
          src="https://placekitten.com/g/512/288"
          alt="circleImage"
        />
      </Header>
    )
  },
  {
    header: (
      <Header>
        <ThumbnailCircleImage
          size={40}
          src="https://placekitten.com/g/512/289"
          alt="circleImage"
        />
      </Header>
    )
  },
  {
    header: (
      <Header>
        <ThumbnailCircleImage
          size={40}
          src="https://placekitten.com/g/512/283"
          alt="circleImage"
        />
      </Header>
    )
  }
];
