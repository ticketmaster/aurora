import React from "react";
import { render } from "react-testing-library";

import Backdrop from "../index";
import BottomSheet from "../../BottomSheet";

describe("<Backdrop />", () => {
  it("renders Backdrop correctly", () => {
    const { container } = render(
      <Backdrop>
        <BottomSheet>
          <div>Europe</div>
          <div>Africa</div>
          <div>Asias</div>
        </BottomSheet>
      </Backdrop>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });
});
