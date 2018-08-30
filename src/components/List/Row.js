import React from "react";
import PropTypes from "prop-types";

import ListRowContent from "./RowContent";
import { rowDataShape } from "./shape";
import { ItemContainerConsumer } from "./Context";
import { determineIfOpen } from "./helper";

const ListRow = ({ children, rowItem, index, onOverflowClick, ...props }) => (
  <ItemContainerConsumer>
    {({ openIndex, expandMultiple, renderIntoPortal }) => (
      <ListRowContent
        rowItem={{
          ...rowItem
        }}
        isOpen={determineIfOpen(expandMultiple, openIndex, index)}
        index={index}
        onOverflowClick={() => {
          renderIntoPortal({ children, contentType: "mobile" });
          onOverflowClick();
        }}
        {...props}
      >
        {children}
      </ListRowContent>
    )}
  </ItemContainerConsumer>
);

ListRow.defaultProps = {
  children: null,
  onExpandShow: "subTitle"
};

ListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node
};

export default ListRow;
