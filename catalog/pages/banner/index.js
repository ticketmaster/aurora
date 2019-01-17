import React, { Component } from "react";
import { pageLoader } from "catalog";

import Banner from "../../../src/components/Banner";
import { ClearIcon } from "../../../src/components/Icons";
import Spacing from "../../../src/components/Spacing";

class FunctionalBannerDemo extends Component {
  state = {
    isOpen: false
  };

  onRequestClose = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <button onClick={this.onRequestClose}>toggle banner</button>
        <Banner
          heading="This is your primary message text."
          linkText="Link"
          href="https://www.ticketmaster.com/"
          linkProps={{ target: "_blank" }}
          isOpen={isOpen}
          variant="info"
          onRequestClose={this.onRequestClose}
        />
      </React.Fragment>
    );
  }
}

export default {
  path: "/banner",
  title: "Banner",
  imports: {
    Banner,
    ClearIcon,
    Spacing,
    FunctionalBannerDemo
  },
  content: pageLoader(() => import("./index.md"))
};
