import React from "react";
import { render } from "react-testing-library";

import { TabsProvider, TabsConsumer } from "../TabsProvider";

describe("<TabsProvider> and <TabsConsumer>", () => {
  it("should call provided onChangeTabIndex function", () => {
    const onChangeTabIndexMock = jest.fn();
    const { unmount } = render(
      <TabsProvider onChangeTabIndex={onChangeTabIndexMock}>
        <TabsConsumer>
          {({ onChangeTabIndex }) => {
            onChangeTabIndex(1);
          }}
        </TabsConsumer>
      </TabsProvider>
    );
    expect(onChangeTabIndexMock).toHaveBeenLastCalledWith(1);
    unmount();
  });

  it("should change tabIndex via internal onChangeTabIndex function", () => {
    let tabIndexChecker = 0;
    const { unmount } = render(
      <TabsProvider>
        <TabsConsumer>
          {({ tabIndex, onChangeTabIndex }) => {
            onChangeTabIndex()(10);
            tabIndexChecker = tabIndex;
          }}
        </TabsConsumer>
      </TabsProvider>
    );
    expect(tabIndexChecker).toEqual(10);
    unmount();
  });

  it("should call callback function with tabIndex value as argument", () => {
    const onChangeTabIndexCallbackMock = jest.fn();
    const { unmount } = render(
      <TabsProvider>
        <TabsConsumer>
          {({ onChangeTabIndex }) => {
            onChangeTabIndex(onChangeTabIndexCallbackMock)(10);
          }}
        </TabsConsumer>
      </TabsProvider>
    );
    expect(onChangeTabIndexCallbackMock).toHaveBeenLastCalledWith(10);
    unmount();
  });
});
