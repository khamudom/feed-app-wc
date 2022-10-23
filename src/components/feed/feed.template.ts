import { html } from "@microsoft/fast-element";
import { Feed } from "./feed.js";

export const template = html<Feed>`
  <template>
    <div class="container" part="container">
      <div class="header">
        <!-- <div class="carousel-container" part="carousel-container">
          <ku-carousel>
            <img src="https://placekitten.com/340/160" alt="placeholder" />
            <img src="https://placekitten.com/340/160" alt="placeholder" />
            <img src="https://placekitten.com/340/160" alt="placeholder" />
          </ku-carousel>
        </div> -->
      </div>
      <div class="feed-layout" part="feed-layout">
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
        <ku-card>
          <ku-card-content></ku-card-content>
        </ku-card>
      </div>
    </div>
  </template>
`;
