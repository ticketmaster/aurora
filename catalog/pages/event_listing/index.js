import { pageLoader } from "catalog";
import EventListing from "../../../src/components/EventListing";
import {EVENTS_MANY} from "./mock";

export default {
  path: "/event_Listing",
  title: "Event Listing",
  imports: {EventListing, EVENTS_MANY},
  content: pageLoader(() => import("./index.md"))
};
