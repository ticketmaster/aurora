import React, { Component } from "react";
import DeviceSizeProvider from "../../../src/components/DeviceSize/Provider";
import { Row, Column } from "../../../src/components/Grid";
import AdaptiveModal from "../../../src/components/Modal";
import { Button } from "../../../src/components/Button";

import { RadioButton, RadioGroup } from "../../../src/components/Input";

class ModalDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      modalSize: "small"
    };
  }

  changeSize = e => {
    this.setState({
      modalSize: e[0]
    });
  };

  performToggle = () => {
    const { isOpened } = this.state;

    this.setState({
      isOpened: !isOpened
    });
  };

  render() {
    const { isOpened, modalSize } = this.state;

    const openTrigger = (
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button
          key="btn"
          style={{ width: "auto" }}
          onClick={this.performToggle}
        >
          View Modal
        </Button>
      </div>
    );

    const sizeSelector = (
      <RadioGroup key="radio" onChange={this.changeSize}>
        <RadioButton
          index={1}
          name="size1"
          size="large"
          value="small"
          checked={modalSize === "small"}
        >
          400 px
        </RadioButton>
        <RadioButton index={2} name="size1" size="large" value="medium">
          520 px
        </RadioButton>
        <RadioButton index={3} name="size1" size="large" value="large">
          640 px
        </RadioButton>
        <RadioButton index={4} name="size1" size="large" value="xLarge">
          860 px
        </RadioButton>
      </RadioGroup>
    );

    const closingPromise = () => new Promise(this.performToggle, () => {});

    return (
      <Row>
        <Column small={0} medium={1} />
        <Column small={12} medium={10}>
          {sizeSelector}
          {openTrigger}
          <DeviceSizeProvider>
            <AdaptiveModal
              size={modalSize}
              actionBar={<div>Demo Modal</div>}
              bottomActionBar={
                <div>
                  <Button
                    onClick={this.performToggle}
                    style={{ width: "auto" }}
                  >
                    Thank You
                  </Button>
                  <Button
                    variant="transparent"
                    onClick={this.performToggle}
                    style={{ width: "auto" }}
                  >
                    No Thank You
                  </Button>
                </div>
              }
              isOpened={isOpened}
              onRequestClose={closingPromise}
              displayTop
            >
              {Array(10)
                .fill("")
                .map((_, i) => (
                  <div key={i.toString()}>Example Text Row {i + 1}</div>
                ))}
            </AdaptiveModal>
          </DeviceSizeProvider>
        </Column>
      </Row>
    );
  }
}

export default ModalDemo;
