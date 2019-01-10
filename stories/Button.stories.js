import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";

import { Button } from "../src";
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES
} from "../src/components/Button/constants";

storiesOf("Button", module).add("Aurora button", () => {
  const content = text("Text", "Aurora Button");

  const variant = select("Variant", BUTTON_VARIANTS);
  const size = select("Size", BUTTON_SIZES);

  return (
    <Button onClick={action("onClick")} variant={variant} size={size}>
      {content}
    </Button>
  );
});
