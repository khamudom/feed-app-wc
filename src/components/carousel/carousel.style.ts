import { css } from "@microsoft/fast-element";

export const styles = css`
  :host {
    display: block;
  }

  .container {
    display: flex;
  }

  .images {
    display: flex;
    flex-shrink: 1;
    overflow: scroll;
  }
`;
