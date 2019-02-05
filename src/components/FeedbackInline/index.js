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
  Heading,
  MAX_FEEDBACK_HEIGHT,
  BASE_FEEDBACK_HEIGHT
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
    icon: PropTypes.node,
    iconClassName: PropTypes.string
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
    icon: null,
    iconClassName: ""
  };

  // Container max height should be handled programmatically as content height is unknown
  state = {
    isExpanded: this.props.isExpanded,
    maxHeight: this.props.isExpanded
      ? `${MAX_FEEDBACK_HEIGHT}px` // max height if banner is expanded during first render
      : `${BASE_FEEDBACK_HEIGHT}px`
  };

  componentDidMount() {
    // update max height to the correct value so animation works correctly
    if (this.props.content && this.state.isExpanded) {
      // with expanded content
      const maxHeight =
        this.content.current.offsetHeight +
        this.heading.current.offsetHeight +
        BASE_FEEDBACK_HEIGHT;

      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ maxHeight: `${maxHeight}px` });
    } else {
      // without content or collapsed
      const maxHeight =
        this.heading.current.offsetHeight + BASE_FEEDBACK_HEIGHT;
      this.setState({ maxHeight: `${maxHeight}px` });
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  content = React.createRef();
  heading = React.createRef();

  toggleContent = e => {
    const { onButtonClick } = this.props;
    const contentHeight = this.content.current.offsetHeight;
    const headingHeight = this.heading.current.offsetHeight;
    const collapsedMaxHeight = `${headingHeight + BASE_FEEDBACK_HEIGHT}px`;
    const expandedMaxHeight = `${contentHeight +
      headingHeight +
      BASE_FEEDBACK_HEIGHT}px`;

    this.setState(({ isExpanded }) => ({
      isExpanded: !isExpanded,
      maxHeight: isExpanded ? collapsedMaxHeight : expandedMaxHeight
    }));

    if (onButtonClick) {
      onButtonClick(e);
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

  renderIcon = () => {
    const { variant, icon, iconClassName } = this.props;
    if (!variant && !icon) {
      return null;
    }
    const Icon = variantsIcons[variant];

    return (
      icon || <Icon type="filled" size="regular" className={iconClassName} />
    );
  };

  render() {
    const { heading, content, variant, style, ...props } = this.props;
    const { isExpanded, maxHeight } = this.state;

    return (
      <Container
        className={classnames({
          collapsed: !isExpanded,
          [`banner-variant--${variant}`]: variant
        })}
        style={{ ...style, maxHeight }}
        {...props}
      >
        <IconSection>{this.renderIcon()}</IconSection>
        <ContentSection>
          <div ref={this.heading}>
            <Heading tag="span" weight="semiBold">
              {heading}
            </Heading>
            {this.renderControl()}
          </div>
          <div ref={this.content}>
            <Content>{content}</Content>
          </div>
        </ContentSection>
      </Container>
    );
  }
}

export default FeedbackInline;
