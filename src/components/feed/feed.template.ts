import { html } from "@microsoft/fast-element";
import { Feed } from "./feed.js";

export const template = html<Feed>`
  <template>
    <div>
      <div class="carousel-container">
        <ku-carousel></ku-carousel>
      </div>

      <div class="feed-layout">
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
      </div>
    </div>
  </template>
`;
