import { html } from "@microsoft/fast-element";
import { CardContent } from "./card-content.js";

export const template = html<CardContent>`
  <template>
    <div>
      <div class="image" part="image">
        <slot name="image"></slot>
      </div>
      <div class="content" part="content">
        <div><slot name="header">Header Info<slot></div>
        <slot>Content Title</slot>
        <div><slot name="footer">Footer Info<slot></div>
      </div>
    </div>
  </template>
`;
