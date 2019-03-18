import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { TabsProvider, TabsConsumer } from "./TabsProvider";
import { Text } from "../Text";
import { spacing, zIndex, themes } from "../../theme";
import { largeAndUp, smallAndUp } from "../../theme/mediaQueries";

const padding = spacing.moderate;

const Container = styled.div.attrs({
  className: props =>
    props.areTabsOverflow ? "tabs__container--overflowed" : null
})`
  ${smallAndUp`
    &.tabs__container--overflowed:after {
      width: 100%;
      left: 0;
    }
  `};

  position: relative;
  z-index: ${zIndex.reset};
  width: 100%;
  overflow: visible;

  ${({ withBorderBottom }) =>
    withBorderBottom &&
    `
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-bottom: 1px solid ${themes.tm.gray04};
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${zIndex.unset};
  }
  `} &.tabs__container--overflowed:after {
    width: 100vw;
    left: calc(50% - 50vw);
  }
`;

const Content = styled.div.attrs({
  className: props =>
    props.areTabsOverflow ? "tabs__content--overflowed" : null
})`
  ${smallAndUp`
    &.tab__content--overflowed {
      margin-left: 0;
      padding-left: 0;
      width: 100%;
    }
  `};
  display: flex;
  flex: 1;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  &.tab__content--overflowed {
    margin-left: calc(50% - 50vw);
    padding-left: calc(50vw - 50%);
    width: 100vw;
  }
`;

const Tab = styled.div`
  ${largeAndUp`
    padding-right: ${spacing.comfy};
  `};
  display: block;
  padding-right: ${spacing.normal};
  white-space: nowrap;

  &:last-of-type {
    padding-right: 0;
  }
`;

const checkIfOverflows = ({ offsetWidth = 0, scrollWidth = 0 } = {}) =>
  offsetWidth < scrollWidth;

const TabItemButton = styled.div.attrs(props => {
  const { isActive, dataIndex, ...rest } = props;
  return {
    className: isActive ? "tab__button--active" : "",
    "data-index": dataIndex,
    ...rest
  };
})`
  display: block;
  padding: ${padding} 0 ${spacing.cozy} 0;
  cursor: pointer;
  &.tab__button--active {
    border-bottom: 4px solid
      ${props => props.underlineColor || themes.global.primary.base};
  }
`;

class Tabs extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    itemsProps: PropTypes.arrayOf(PropTypes.any),
    /* eslint-disable react/forbid-prop-types */
    defaultItemProps: PropTypes.object,
    /* eslint-enable react/forbid-prop-types */
    index: PropTypes.number,
    onClick: PropTypes.func,
    variant: PropTypes.string,
    accent: PropTypes.string,
    weight: PropTypes.string,
    underlineColor: PropTypes.string,
    withBorderBottom: PropTypes.bool
  };

  static defaultProps = {
    itemsProps: [],
    defaultItemProps: {},
    index: -1,
    onClick: () => {},
    variant: null,
    accent: null,
    weight: null,
    underlineColor: null,
    withBorderBottom: true
  };

  state = {
    isTabsContainerOverflows: false
  };

  componentDidMount() {
    this.updateIsOverflowsState();
    window.addEventListener("resize", this.updateIsOverflowsState); // eslint-disable-line
  }

  componentDidUpdate() {
    if (this.state.isTabsContainerOverflows) {
      const {
        offsetWidth: contentWidth,
        scrollLeft: contentScrollLeft
      } = this.content;
      const { index } = this.props;
      const {
        offsetWidth: activeItemWidth = 0,
        offsetLeft: activeItemLeft = 0
      } = this.itemRefs[index];

      if (activeItemWidth + activeItemLeft > contentWidth + contentScrollLeft) {
        this.content.scrollLeft =
          activeItemWidth +
          activeItemLeft -
          contentWidth +
          parseInt(padding, 10);
      } else if (activeItemLeft < contentScrollLeft) {
        this.content.scrollLeft = activeItemLeft - parseInt(padding, 10);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsOverflowsState); //eslint-disable-line
  }

  updateIsOverflowsState = () => {
    const isOverflows = checkIfOverflows(this.content);
    if (this.state.isTabsContainerOverflows !== isOverflows) {
      this.setState({
        isTabsContainerOverflows: isOverflows
      });
    }
  };

  itemRefs = [];

  renderItems = () => {
    const {
      items,
      index,
      onClick,
      underlineColor,
      itemsProps,
      defaultItemProps,
      ...textProps
    } = this.props;

    const areItemsValidKeys =
      items &&
      items.length > 0 &&
      (items[0].constructor === String || items[0].constructor === Number);

    return items.map((item, itemIndex) => (
      <Tab key={areItemsValidKeys ? item : itemIndex}>
        <TabItemButton
          isActive={itemIndex === index}
          underlineColor={underlineColor}
          onClick={() => onClick(itemIndex)}
          ref={ref => {
            this.itemRefs[itemIndex] = ref;
          }}
          dataIndex={itemIndex}
          {...itemsProps[itemIndex] || defaultItemProps}
        >
          <Text
            responsiveSize={{ small: "kilo", large: "giga" }}
            primary
            {...textProps}
          >
            {item}
          </Text>
        </TabItemButton>
      </Tab>
    ));
  };

  render() {
    const { withBorderBottom } = this.props;

    return (
      <Container
        areTabsOverflow={this.state.isTabsContainerOverflows}
        withBorderBottom={withBorderBottom}
      >
        <Content
          ref={ref => {
            this.content = ref;
          }}
          areTabsOverflow={this.state.isTabsContainerOverflows}
        >
          {this.renderItems()}
        </Content>
      </Container>
    );
  }
}
export { Tabs, TabsProvider, TabsConsumer };
