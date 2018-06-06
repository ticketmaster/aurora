import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../../theme/colors";
import constants from "../../theme/constants";
import { rowDataShape } from "./shape";
import ListRow from "./Row";
import ExpandedRowProvider from "./ExpandedRowProvider";
import BottomSheetProvider from "./BottomSheetProvider";

const Container = styled.div`
  width: 100%;
  border: 1px solid ${colors.lightGray};
  border-radius: ${constants.borderRadius.large};
  overflow: hidden;
`;

class ListContainer extends Component {
  state = {
    expandedRowId: "",
    bottomSheetRowId: ""
  };

  onExpandOrCollapse = rowId => {
    if (this.state.expandedRowId) {
      return this.state.expandedRowId === rowId
        ? this.setState({ expandedRowId: "" })
        : this.setState({ expandedRowId: rowId });
    }
    return this.setState({ expandedRowId: rowId });
  };

  setBottomSheetRowId = rowId => {
    this.setState({ bottomSheetRowId: rowId });
  };

  render() {
    const { listItems } = this.props;
    return (
      <ExpandedRowProvider value={this.state.expandedRowId}>
        <BottomSheetProvider value={this.state.bottomSheetRowId}>
          <Container>
            {listItems.map(item => (
              <ListRow
                key={item.rowId}
                rowId={item.rowId}
                title={item.title}
                subTitle={item.subTitle}
                dateTitle={item.dateTitle}
                dateSubTitle={item.dateSubTitle}
                buttonText={item.buttonText}
                href={item.href}
                variant={item.variant}
                linkTitle={item.linkTitle}
                linkUrl={item.linkUrl}
                linkSubTitle={item.linkSubTitle}
                coloredDate={item.coloredDate}
                onClick={item.onClick}
                onOverflowClick={this.setBottomSheetRowId}
                expandedSections={item.expandedSections}
                onExpandOrCollapseClick={this.onExpandOrCollapse}
              />
            ))}
          </Container>
        </BottomSheetProvider>
      </ExpandedRowProvider>
    );
  }
}

ListContainer.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape(rowDataShape)).isRequired
};

export default ListContainer;
