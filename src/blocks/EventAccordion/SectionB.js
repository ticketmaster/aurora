import styled from "styled-components";

const SectionB = styled.div`
  background-color: #fff;
  color: #444;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: [col] 20px [col] 150px [col] 1fr [col] auto;
  grid-template-rows: repeat(1, [row] auto);
  padding: 3.5px 16px;

   * {
     outline: 1px dashed grey;
   }

  .info:hover {
    background: lavender;
  }

  .month {
    grid-column: 2;
    grid-row: 1;
  }

  .time {
    grid-column: 2;
    grid-row: 2;
  }

  .cta {
    background: lavender;
    display: grid;
    grid-column: 4;
    grid-row: 1/4; */
    /* grid-template-rows: repeat(6,[row] auto); */
 }
    a {
     grid-column: 4;
     grid-row: 1/3;
     max-height: 34px;
     max-width: 102px;
   }

  .cta-subText {
    font-size: 12px;
    grid-row: 5;
    margin: 0;
  }

  .chevron {
    grid-column: 1;
    grid-row: 1/3;
    display: flex;
    align-items: center;
  }

  .label {
    grid-column: 3 / 3;
    grid-row: 1;
  }

  .extras {
    grid-column: 3/3;
    grid-row: 3;
  }

  .title {
    grid-column: 3 / 3;
    grid-row: 2;
    margin: 0;
    font-size: 16px;
  }

  .subTitle {
    grid-column: 3/3;
    grid-row: 3;
    font-size: 14px;
    opacity: 60%;
    margin: 0;
  }
`;

export default SectionB;
