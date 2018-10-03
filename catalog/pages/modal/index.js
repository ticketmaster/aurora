import { pageLoader } from "catalog";
import Modal from "../../../src/components/Modal";
import DeviceSizeProvider from "../../../src/components/DeviceSize/Provider";
import { Button } from "../../../src/components/Button";

export default {
  path: "modal",
  title: "Modal",
  imports: {
    Modal,
    Button,
    DeviceSizeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
