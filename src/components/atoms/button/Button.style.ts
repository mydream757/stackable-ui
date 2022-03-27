import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

export const ButtonCommonStyle: SerializedStyles = css`
  font-family: 'Arial', '맑은고딕', 'sans-serif';
  border-radius: 6px;
  border: none;
  box-sizing: content-box;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonColorStyleSet = {
  darkPrimary: css`
    background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25);
    color: #ffffff;
    &:focus {
      border: 3.5px solid rgba(81, 163, 240, 0.5);
      linear-gradient(180deg, #3B7ADD 0%, #346DC5 100%);
    }
  `,
  gray: css`
    background: #6e6d70;
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
      inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5);
    &:focus {
      border: 3.5px solid rgba(58, 108, 217, 0.5);
    }

    color: #dfdedf;
  `,
  primary: css`
    background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);

    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25);
    color: #ffffff;
    &:focus {
      border: 3.5px solid rgba(58, 108, 217, 0.5);
    }
  `,
  white: css`
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);

    &:focus {
      border: 3.5px solid rgba(58, 108, 217, 0.5);
    }
    color: #3d3d3d;
  `,
};

export type ButtonColorType = keyof typeof ButtonColorStyleSet;
