import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./my-component.style.js";
import { template } from "./my-component.template.js";


export class MyComponent extends FASTElement {}

export const mycomponent = MyComponent.compose({
    name: "my-component",
    template,
    styles,
});
