import { css } from "@microsoft/fast-element";

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: content;
  }
  .container {
    max-width: 1236px;
    background-color: red;
  }
  .header {
    min-height: 100px;
    background-color: blue;
  }
  .feed-layout {
    display: flex;
    grid-gap: 12px;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  ku-carousel {
    width: 320px;
  }
`;
