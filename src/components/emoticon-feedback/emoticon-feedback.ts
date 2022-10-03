import { FASTElement } from "@microsoft/fast-element";
import { template } from "../my-component/my-component.template.js";
import { styles } from "./emoticon-feedback.style.js";

export class EmoticonFeedback extends FASTElement {}

export const emoticonfeedback = EmoticonFeedback.compose({
    name: "emoticon-feedback",
    template,
    styles,
})