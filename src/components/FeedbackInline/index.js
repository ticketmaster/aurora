import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { variants, variantsIcons } from "./constants";
import {
  Container,
  Content,
  IconSection,
  ContentSection,
  Link,
  Heading
} from "./FeedbackInline.styles";

export function contentValidator(props, propName, componentName) {
  // if content prop is provided collapsedText and expandedText should be provided as well
  if (
    props[propName] &&
    typeof props[propName] === "string" &&
    (!props.collapsedText || !props.expandedText)
  ) {
    return new Error(
      `${propName} is supplied to ${componentName} but collapsedText or expandedText props or both are not supplied`
    );
  }

  if (
    typeof props[propName] === "string" ||
    typeof props[propName] === "undefined"
  ) {
    return null;
  }

  return new Error(
    `Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected \`string\``
  );
}

class FeedbackInline extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    content: contentValidator,
    isExpanded: PropTypes.bool,
    expandedText: PropTypes.string,
    collapsedText: PropTypes.string,
    onButtonClick: PropTypes.func,
    buttonProps: PropTypes.shape(),
    style: PropTypes.shape(),
    variant: PropTypes.oneOf(variants),
    icon: PropTypes.node
  };

  static defaultProps = {
    isExpanded: false,
    content: "",
    expandedText: "",
    collapsedText: "",
    onButtonClick: null,
    buttonProps: {},
    style: {},
    variant: null,
    icon: null
  };

  state = {
    isExpanded: this.props.isExpanded
  };

  toggleContent = () => {
    const { onButtonClick } = this.props;

    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));

    if (onButtonClick) {
      onButtonClick();
    }
  };

  renderControl = () => {
    const { expandedText, collapsedText, buttonProps } = this.props;
    const { isExpanded } = this.state;

    return (
      <Link size="hecto" onClick={this.toggleContent} {...buttonProps}>
        {isExpanded ? expandedText : collapsedText}
      </Link>
    );
  };

  renderIcon = () => {
    const { variant, icon } = this.props;
    if (!variant && !icon) {
      return null;
    }
    const Icon = variantsIcons[variant];

    return icon || <Icon type="filled" size="regular" />;
  };

  render() {
    const { heading, content, variant, style } = this.props;
    const { isExpanded } = this.state;

    return (
      <Container
        className={classnames({
          collapsed: !isExpanded,
          [`banner-variant--${variant}`]: variant
        })}
        style={{ ...style }}
      >
        <IconSection>{this.renderIcon()}</IconSection>
        <ContentSection>
          <Heading tag="div" weight="semiBold">
            {heading}
          </Heading>
          {this.renderControl()}
          <Content>{content}</Content>
        </ContentSection>
      </Container>
    );
  }
}

export default FeedbackInline;
