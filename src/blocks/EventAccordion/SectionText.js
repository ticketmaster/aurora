import React from "react";
import styled from "styled-components";

const SectionText = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, [col] 150px);
  grid-template-rows: repeat(2, [row] auto);
  background-color: #fff;
  color: #444;

  .box {
    background-color: #444;
    color: #fff;
    padding: 4px;
  }

  .box .box {
    background-color: #ccc;
    color: #444;
  }
`;

export default SectionText;
