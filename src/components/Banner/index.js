import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Transition } from "react-transition-group";
import { variants, variantsIcons } from "./constants";
import { constants } from "../../theme";
import {
  Container,
  Content,
  CloseButton,
  IconSection,
  ContentSection,
  CloseIcon,
  Link,
  HeaderText,
  BASE_BANNER_HEIGHT,
  MAX_BANNER_HEIGHT
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
    containerProps: PropTypes.shape(),
    contentProps: PropTypes.shape(),
    role: PropTypes.string,
    style: PropTypes.shape(),
    variant: PropTypes.oneOf(variants),
    icon: PropTypes.node,
    closeButtonTitleText: PropTypes.string,
    closeButtonHidden: PropTypes.bool,
    customColors: PropTypes.shape({
      primaryColor: PropTypes.string,
      backgroundColor: PropTypes.string,
      textColor: PropTypes.string
    })
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
    containerProps: {},
    contentProps: {},
    role: null,
    style: {
      transition: `max-height 0.3s ${constants.easing.easeInOutQuad} 0s`
    },
    variant: null,
    icon: null,
    closeButtonTitleText: "Close banner",
    closeButtonHidden: false,
    customColors: {}
  };

  // Container max height should be handled programmatically as content height is unknown
  state = {
    isExpanded: this.props.isExpanded,
    maxHeight: this.props.isExpanded
      ? `${MAX_BANNER_HEIGHT}px` // max height if banner is expanded during first render
      : `${BASE_BANNER_HEIGHT}px`
  };

  componentDidMount() {
    // update max height to the correct value so animation works correctly
    if (this.props.content && this.state.isExpanded) {
      const maxHeight = this.content.current.offsetHeight + BASE_BANNER_HEIGHT;

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ maxHeight: `${maxHeight}px` });
    }
  }

  content = React.createRef();

  isCustomVariant = () => this.props.variant === variants[4];

  toggleContent = () => {
    const { onButtonClick } = this.props;
    const collapsedMaxHeight = `${BASE_BANNER_HEIGHT}px`;
    const expandedMaxHeight = `${MAX_BANNER_HEIGHT}px`;

    this.setState(({ isExpanded }) => ({
      isExpanded: !isExpanded,
      maxHeight: isExpanded ? collapsedMaxHeight : expandedMaxHeight
    }));

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
    const {
      onRequestClose,
      closeButtonTitleText,
      closeButtonHidden
    } = this.props;

    if (!onRequestClose || closeButtonHidden) {
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
    const {
      variant,
      icon,
      customColors: { primaryColor: color }
    } = this.props;
    if (!variant && !icon) {
      return null;
    }
    const Icon = variantsIcons[variant];

    let customColor = null;
    if (this.isCustomVariant()) customColor = { color };

    return icon || <Icon type="filled" size="regular" {...customColor} />;
  };

  render() {
    const {
      isOpen,
      heading,
      content,
      variant,
      role,
      style,
      customColors,
      containerProps,
      contentProps
    } = this.props;
    const { isExpanded, maxHeight } = this.state;

    return (
      <Transition
        in={isOpen}
        timeout={isOpen ? 0 : 300} // allows to animate fade in after render correctly
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <Container
            className={classnames({
              collapsed: !isExpanded,
              [`banner-variant-${variant}`]: variant,
              "visible-banner": state === "entered"
            })}
            customColors={this.isCustomVariant() && customColors}
            role={role}
            {...containerProps}
          >
            <IconSection>{this.renderIcon()}</IconSection>
            <ContentSection {...contentProps}>
              <HeaderText
                tag="span"
                weight="semiBold"
                customColors={this.isCustomVariant() && customColors}
              >
                {heading}
              </HeaderText>
              {this.renderControl()}
              <div ref={this.content} style={{ ...style, maxHeight }}>
                <Content customColors={this.isCustomVariant() && customColors}>
                  {content}
                </Content>
              </div>
            </ContentSection>
            {this.renderCloseButton()}
          </Container>
        )}
      </Transition>
    );
  }
}

export default Banner;
