import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./card.style.js";
import { template } from "./card.template.js";

export class Card extends FASTElement {}

export const card = Card.compose({
  name: "ku-card",
  template,
  styles,
});
