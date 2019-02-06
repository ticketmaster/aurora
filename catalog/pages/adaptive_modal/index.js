import { pageLoader } from "catalog";
import AdaptiveModal from "../../../src/components/Modal";
import DeviceSizeProvider from "../../../src/components/DeviceSize/Provider";
import { Button } from "../../../src/components/Button";
import ModalDemo from "./demo";

export default {
  path: "modal",
  title: "Adaptive Modal",
  imports: {
    AdaptiveModal,
    Button,
    DeviceSizeProvider,
    ModalDemo
  },
  content: pageLoader(() => import("./index.md"))
};
