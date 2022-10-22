import { html } from "@microsoft/fast-element";
import { Card } from "./card.js";

export const template = html<Card>`
  <template>
    <div>
      <slot>Default Card Slot</slot>
    </div>
  </template>
`;
