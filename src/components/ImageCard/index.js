import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";
import typography from "../../theme/typography";
import { Text } from "../Text";

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  flex: none;
`;

//  come back
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
`;

const CaptionContainer = styled.div`
  position: relative;
  color: ${colors.white.base};
  background-color: ${props => (props.half ? "none" : "rgba(31, 38, 45, 0.8)")};
  border-radius: ${constants.borderRadius.large};
  padding: ${spacing.slim} ${spacing.cozy};
  margin-left: ${spacing.cozy};
  margin-bottom: ${spacing.cozy};
  font-style: ${props => (props.half ? "normal" : "inherit")};
  font-stretch: ${props => (props.half ? "normal" : "inherit")};
  line-height: ${props => (props.half ? "normal" : "inherit")};
  letter-spacing: ${props => (props.half ? "normal" : "inherit")};
`;

const HalfCard = Card.extend`
  width: ${props => (props.width ? props.width : "")};
`;

const Title = styled.span`
  display: block;
  width: 100%;
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  > .image-card__title--half > span {
    font-size: ${typography.size.hecto};
    color: ${colors.azure.base};
  }
`;

const SubTitle = styled.span`
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.regular};
  > .image-card__subtitle--half > span {
    color: ${colors.blackPearl};
    letter-spacing: "normal";
  }
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

const ImageCard = ({ src, alt, title, children, type, ...props }) => {
  const [imageTitle, subTitle, ...rest] = Children.toArray(children || []);
  const img = props.image || <Image src={src} alt={alt} title={title} />;
  if (type === "half") {
    return (
      <RowContainer>
        <HalfCard width="50%">{img}</HalfCard>
        <CaptionContainer half>
          <Title>
            <Text className="image-card__title--half">{imageTitle}</Text>
          </Title>
          <SubTitle half>
            <Text className="image-card__subtitle--half">{subTitle}</Text>
          </SubTitle>
        </CaptionContainer>
      </RowContainer>
    );
  }

  return (
    <Card>
      <Container>
        {img}
        <Overlay>
          {(imageTitle || subTitle) && (
            <CaptionContainer>
              {imageTitle}
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
  title: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.element
};

ImageCard.defaultProps = {
  type: "full",
  alt: "",
  title: "",
  src: "",
  children: null,
  image: null
};

ImageCard.Title = Title;
ImageCard.SubTitle = SubTitle;

export default ImageCard;
