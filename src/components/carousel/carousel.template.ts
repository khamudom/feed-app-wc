import { html } from "@microsoft/fast-element";
import { Carousel } from "./carousel.js";

export const template = html<Carousel>`
  <template>
    <div class="container" id="container">
      <button id="prev">Previous</button>
      <div class="images" id="images">
        <div class="track-container">
          <ul></ul>
        </div>
        <slot></slot>
      </div>
      <button id="next">Next</button>
    </div>
  </template>
`;
