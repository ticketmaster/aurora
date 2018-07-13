import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";
import Image from "../Image";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";
import typography from "../../theme/typography";

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
  background-color: rgba(31, 38, 45, 0.8);
  border-radius: ${constants.borderRadius.large};
  padding: ${spacing.slim} ${spacing.cozy};
  margin-left: ${spacing.cozy};
  margin-bottom: ${spacing.cozy};
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
  const img = props.image || <Image.FullBleed src={src} alt={alt} />;
  if (type === "half") {
    return (
      <RowContainer>
        <Card>{img}</Card>
        <CaptionContainer>
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
            <CaptionContainer>
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
