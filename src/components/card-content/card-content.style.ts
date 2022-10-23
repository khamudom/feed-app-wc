import { css } from "@microsoft/fast-element";

export const styles = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  .image {
    width: 100%;
    height: 144px;
    background-color: #333333;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;
