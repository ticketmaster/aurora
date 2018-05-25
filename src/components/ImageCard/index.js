import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";
import typography from "../../theme/typography";

const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  display: flex;
  align-items: flex-end;
`;

const CaptionContainer = styled.div`
  position: relative;
  width: 100%;
  color: ${props => props.color};
  padding-top: 0;
  padding-bottom: 9px;
  padding-left: ${spacing.gutters.small}px;
  padding-right: ${spacing.gutters.small}px;

  @media screen and ${constants.breakpoints.mediumAndUp} {
    padding-bottom: 9px;
    padding-left: ${spacing.gutters.mediumAndUp / 2}px;
    padding-right: ${spacing.gutters.mediumAndUp / 2}px;
  }
`;

const Title = styled.span`
  display: block;
  width: 100%;
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
`;

const SubTitle = styled.span`
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.regular};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const RowContainer = Container.extend`
  flex-direction: row;
  align-items: center;
`;

const ImageCard = ({ src, alt, children, type, ...props }) => {
  const [title, subTitle, ...rest] = Children.toArray(children || []);
  const img = props.image || <Image src={src} alt={alt} />;

  if (type === "half") {
    return (
      <RowContainer>
        <Card>
          {img}
          <Overlay />
        </Card>
        <CaptionContainer color={colors.onyx.base}>
          {title}
          {subTitle}
        </CaptionContainer>
      </RowContainer>
    );
  }

  return (
    <Card>
      <Container>
        {img}
        <Overlay>
          {(title || subTitle) && (
            <CaptionContainer color={colors.white.base}>
              {title}
              {subTitle}
            </CaptionContainer>
          )}
        </Overlay>
      </Container>
      {(rest && rest.length && <div>{rest}</div>) || null}
    </Card>
  );
};

ImageCard.propTypes = {
  type: PropTypes.oneOf(["full", "half"]),
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.element
};

ImageCard.defaultProps = {
  type: "full",
  alt: "",
  src: "",
  children: null,
  image: null
};

ImageCard.Title = Title;
ImageCard.SubTitle = SubTitle;

export default ImageCard;
