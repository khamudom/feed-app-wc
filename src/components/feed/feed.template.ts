import { html } from "@microsoft/fast-element";
import { Feed } from "./feed.js";

export const template = html<Feed>`
  <template>
    <div>
      <div class="header">carousel here</div>
      <div class="feeds">collection feeds</div>
    </div>
  </template>
`;
