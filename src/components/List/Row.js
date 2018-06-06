import React from "react";
import PropTypes from "prop-types";

import { rowDataShape } from "./shape";
import { ItemContainerConsumer } from "./Context";
import ListRowContent from "./RowContent";

const ListRow = ({ children, rowItem, index, onOverflowClick, ...props }) => (
  <ItemContainerConsumer>
    {({ openIndex, renderIntoPortal }) => (
      <ListRowContent
        rowItem={{
          ...rowItem
        }}
        isOpen={openIndex === index}
        index={index}
        onOverflowClick={() => {
          renderIntoPortal({ children });
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
  children: null
};

ListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default ListRow;
