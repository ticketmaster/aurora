import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Text } from "../Text";
import { variants, variantsIcons } from "./constants";
import {
  Container,
  Content,
  CloseButton,
  IconSection,
  ContentSection,
  CloseIcon,
  Link
} from "./Banner.styles";

class Banner extends Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string,
    href: PropTypes.string,
    linkText: PropTypes.string,
    expandedText: PropTypes.string,
    collapsedText: PropTypes.string,
    onButtonClick: PropTypes.func,
    onRequestClose: PropTypes.func,
    linkProps: PropTypes.shape(),
    buttonProps: PropTypes.shape(),
    style: PropTypes.shape(),
    variant: PropTypes.oneOf(variants),
    icon: PropTypes.node,
    closeButtonTitleText: PropTypes.string
  };

  static defaultProps = {
    isExpanded: false,
    content: "",
    href: "",
    linkText: "",
    expandedText: "",
    collapsedText: "",
    onButtonClick: null,
    onRequestClose: null,
    linkProps: {},
    buttonProps: {},
    style: {},
    variant: null,
    icon: null,
    closeButtonTitleText: "Close banner"
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
    const {
      href,
      linkText,
      expandedText,
      collapsedText,
      linkProps,
      buttonProps
    } = this.props;
    const { isExpanded } = this.state;

    if (!linkText && !expandedText && !collapsedText) {
      return null;
    }

    const props = href
      ? { ...linkProps, href }
      : { ...buttonProps, onClick: this.toggleContent };

    const text = linkText || (isExpanded ? expandedText : collapsedText);

    return (
      <Link size="hecto" {...props}>
        {text}
      </Link>
    );
  };

  renderCloseButton = () => {
    const { onRequestClose, closeButtonTitleText } = this.props;
    if (!onRequestClose) {
      return null;
    }

    return (
      <CloseButton onClick={onRequestClose}>
        <CloseIcon size="small">
          <title>{closeButtonTitleText}</title>
        </CloseIcon>
      </CloseButton>
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
    const { isOpen, heading, content, variant, style } = this.props;
    const { isExpanded } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <Container
        className={classnames({
          collapsed: !isExpanded,
          [`banner-variant-${variant}`]: variant
        })}
        style={style}
      >
        <IconSection>{this.renderIcon()}</IconSection>
        <ContentSection>
          <Text tag="span" weight="semiBold">
            {heading}
          </Text>
          {this.renderControl()}
          <Content>{content}</Content>
        </ContentSection>
        {this.renderCloseButton()}
      </Container>
    );
  }
}

export default Banner;
