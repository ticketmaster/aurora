import React from "react";
import PropTypes from "prop-types";

import ListRowContent from "./RowContent";
import PureListRowContent from "./PureRowContent";
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
  isPure,
  ...props
}) => (
  <ItemContainerConsumer>
    {({
      openIndex,
      expandMultiple,
      renderIntoPortal,
      ...restItemContainerProps
    }) => {
      const params = {
        ...(!isPure && { rowItem }),
        isOpen: determineIfOpen(expandMultiple, openIndex, index),
        index,
        onOverflowClick: () => {
          renderIntoPortal({
            children,
            contentType: "mobile",
            ...(!isPure && { data: rowItem })
          });
          onOverflowClick();
        },
        onExpandItem,
        onCollapseItem,
        ...restItemContainerProps,
        ...props
      };

      return isPure ? (
        <PureListRowContent {...params}>{children}</PureListRowContent>
      ) : (
        <ListRowContent {...params}>{children}</ListRowContent>
      );
    }}
  </ItemContainerConsumer>
);

ListRow.defaultProps = {
  children: null,
  isPure: false,
  onExpandShow: "subTitle",
  onExpandItem: ListRowContent.defaultProps.onExpandItem,
  onCollapseItem: ListRowContent.defaultProps.onCollapseItem,
  rowItem: {}
};

ListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape),
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node,
  onExpandItem: ListRowContent.propTypes.onExpandItem,
  onCollapseItem: ListRowContent.propTypes.onCollapseItem,
  isPure: PropTypes.bool
};

export default ListRow;
