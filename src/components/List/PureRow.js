import React from "react";
import PropTypes from "prop-types";

import PureListRowContent from "./PureRowContent";
import { rowDataShape } from "./shape";
import { ItemContainerConsumer } from "./Context";
import { determineIfOpen } from "./helper";

const PureListRow = ({
  children,
  rowItem,
  index,
  onOverflowClick,
  onExpandItem,
  onCollapseItem,
  ...props
}) => (
  <ItemContainerConsumer>
    {({
      openIndex,
      expandMultiple,
      renderIntoPortal,
      ...restItemContainerProps
    }) => (
      <PureListRowContent
        isOpen={determineIfOpen(expandMultiple, openIndex, index)}
        index={index}
        onOverflowClick={() => {
          renderIntoPortal({ children, contentType: "mobile", data: rowItem });
          onOverflowClick();
        }}
        onExpandItem={onExpandItem}
        onCollapseItem={onCollapseItem}
        {...restItemContainerProps}
        {...props}
      >
        {children}
      </PureListRowContent>
    )}
  </ItemContainerConsumer>
);

PureListRow.defaultProps = {
  children: null,
  onExpandItem: PureListRowContent.defaultProps.onExpandItem,
  onCollapseItem: PureListRowContent.defaultProps.onCollapseItem
};

PureListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  onExpandItem: PureListRowContent.propTypes.onExpandItem,
  onCollapseItem: PureListRowContent.propTypes.onCollapseItem
};

export default PureListRow;
