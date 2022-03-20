import { css } from '@emotion/react';
import React, { ReactElement, ReactNode } from 'react';
import { StackableUIColor } from 'src/config/color/index.type';

interface ButtonProps {
  title: ReactNode;
  onClick?: () => void;
  color?: StackableUIColor
}

export function Button({ title, onClick }: ButtonProps): ReactElement {

  return (
    <button
      css={css`
        background: blue;
        color: white;
      `}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
