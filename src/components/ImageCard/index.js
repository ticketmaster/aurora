import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";
import { themes, spacing, constants, typography } from "../../theme";
import { Text } from "../Text";

const CardWithoutPadding = styled(Card)`
  padding: 0;
`;

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
  color: ${themes.global.white.base};
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

const HalfCard = styled(CardWithoutPadding)`
  width: 50%;
`;

const Title = styled.span`
  display: block;
  width: 100%;
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  > .image-card__title--half > span {
    font-size: ${typography.size.hecto};
    color: ${themes.tm.primary.base};
  }
`;

const SubTitle = styled.span`
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.regular};
  > .image-card__subtitle--half > span {
    color: ${themes.global.darkFill};
    letter-spacing: "normal";
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const RowContainer = styled(Container)`
  flex-direction: row;
  align-items: center;
`;

const ImageCard = ({
  src,
  alt,
  title,
  type,
  cardTitle,
  cardSubtitle,
  overlayProps,
  containerProps,
  captionContainerProps,
  children,
  cardProps,
  ...props
}) => {
  let titleToShow = cardTitle;
  let subtitleToShow = cardSubtitle;
  let childrenToShow = children;
  if (!cardTitle && !cardSubtitle) {
    [titleToShow, subtitleToShow, ...childrenToShow] = Children.toArray(
      children || []
    );
  }
  const img = props.image || <Image src={src} alt={alt} title={title} />;

  if (type === "half") {
    return (
      <RowContainer {...props}>
        <HalfCard>{img}</HalfCard>
        <CaptionContainer {...captionContainerProps} half>
          <Title>
            <Text className="image-card__title--half">{titleToShow}</Text>
          </Title>
          <SubTitle half>
            <Text className="image-card__subtitle--half">{subtitleToShow}</Text>
          </SubTitle>
        </CaptionContainer>
      </RowContainer>
    );
  }

  const combinedCardProps = { ...props, ...cardProps };

  return (
    <CardWithoutPadding {...combinedCardProps}>
      <Container {...containerProps}>
        {img}
        <Overlay {...overlayProps}>
          {(titleToShow || subtitleToShow) && (
            <CaptionContainer {...captionContainerProps}>
              {titleToShow}
              {subtitleToShow}
            </CaptionContainer>
          )}
        </Overlay>
      </Container>
      {childrenToShow}
    </CardWithoutPadding>
  );
};

ImageCard.propTypes = {
  type: PropTypes.oneOf(["full", "half"]),
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.element,
  cardTitle: PropTypes.element,
  cardSubtitle: PropTypes.element,
  overlayProps: PropTypes.shape({}),
  containerProps: PropTypes.shape({}),
  captionContainerProps: PropTypes.shape({}),
  children: PropTypes.node
};

ImageCard.defaultProps = {
  type: "full",
  alt: "",
  title: "",
  src: "",
  image: null,
  cardTitle: null,
  cardSubtitle: null,
  overlayProps: {},
  containerProps: {},
  captionContainerProps: {},
  children: null
};

ImageCard.Title = Title;
ImageCard.SubTitle = SubTitle;

export default ImageCard;
