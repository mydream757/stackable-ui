import { css } from '@emotion/react';
import React, { ReactElement, ReactNode } from 'react';
import {
  ButtonColorStyleSet,
  ButtonColorType,
  ButtonCommonStyle,
} from 'src/components/atoms/button/Button.style';
import Length from 'src/config/types/length';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  colorType?: ButtonColorType;
  width?: Length;
  height?: Length;
  textSize?: Length;
}

export function Button({
  className,
  children,
  onClick,
  colorType = 'primary',
  width = '84px',
  height = '25px',
  textSize = '14px',
}: ButtonProps): ReactElement {
  return (
    <button
      className={'button-outer'}
      css={[
        ButtonCommonStyle,
        ButtonColorStyleSet[colorType],
        css`
          width: ${width};
          height: ${height};
          font-size: ${textSize};
        `,
        className,
      ]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
