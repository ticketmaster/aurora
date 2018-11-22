import React from "react";
import PropTypes from "prop-types";

import ListRowContent from "./RowContent";
import { rowDataShape } from "./shape";
import { ItemContainerConsumer } from "./Context";
import { determineIfOpen } from "./helper";

const ListRow = ({
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
      <ListRowContent
        rowItem={rowItem}
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
      </ListRowContent>
    )}
  </ItemContainerConsumer>
);

ListRow.defaultProps = {
  children: null,
  onExpandShow: "subTitle",
  onExpandItem: ListRowContent.defaultProps.onExpandItem,
  onCollapseItem: ListRowContent.defaultProps.onCollapseItem
};

ListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node,
  onExpandItem: ListRowContent.propTypes.onExpandItem,
  onCollapseItem: ListRowContent.propTypes.onCollapseItem
};

export default ListRow;
