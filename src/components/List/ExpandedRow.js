import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";
import { mediumAndUp } from "../../theme/mediaQueries";

import Row from "../Grid/Row";
import Button from "../Button/Base";

const ExpandedContainer = styled.div`
  background-color: ${colors.white.base};
`;

const MobileOnlyRow = styled(Row)`
  padding: ${spacing.moderate};
  ${mediumAndUp`
    display: none;
  `};
`;

const ExpandedRow = ({ sections, buttonText, onButtonClick }) => (
  <ExpandedContainer>
    <Row>{sections.map(section => section.item)}</Row>
    <MobileOnlyRow>
      <Button
        aria-label={buttonText}
        role="button"
        variant="standard"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </MobileOnlyRow>
  </ExpandedContainer>
);

ExpandedRow.defaultProps = {
  buttonText: "",
  onButtonClick: () => {}
};

ExpandedRow.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.node.isRequired
    })
  ).isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default ExpandedRow;
