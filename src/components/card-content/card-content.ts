import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./card-content.style.js";
import { template } from "./card-content.template.js";

export class CardContent extends FASTElement {}

export const cardcontent = CardContent.compose({
  name: "ku-card-content",
  template,
  styles,
});
