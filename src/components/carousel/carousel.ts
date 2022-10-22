import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./carousel.style.js";
import { template } from "./carousel.template.js";

export class Carousel extends FASTElement {}

export const carousel = Carousel.compose({
  name: "ku-carousel",
  template,
  styles,
});
