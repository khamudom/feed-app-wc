import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./feed.style.js";
import { template } from "./feed.template.js";

export class Feed extends FASTElement {}

export const feed = Feed.compose({
  name: "ku-feed",
  template,
  styles,
});
