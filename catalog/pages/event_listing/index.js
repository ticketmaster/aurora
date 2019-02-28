import { pageLoader } from "catalog";
import EventListing from "../../../src/components/EventListing";
import {
  EVENTS_MANY,
  EVENTLISTING_ONE,
  EVENTLISTING_MANY,
  EVENTLISTING_GQL_TRANSFORMED
} from "./mock";

export default {
  path: "/event_Listing",
  title: "Event Listing",
  imports: {EventListing, EVENTS_MANY, EVENTLISTING_MANY, EVENTLISTING_GQL_TRANSFORMED},
  content: pageLoader(() => import("./index.md"))
};
