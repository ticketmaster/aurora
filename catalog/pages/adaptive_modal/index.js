import { pageLoader } from "catalog";
import AdaptiveModal from "../../../src/components/Modal";
import DeviceSizeProvider from "../../../src/components/DeviceSize/Provider";
import { Button } from "../../../src/components/Button";

export default {
  path: "modal",
  title: "Adaptive Modal",
  imports: {
    AdaptiveModal,
    Button,
    DeviceSizeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
