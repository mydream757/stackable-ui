export type Pixel = `${number}px`;
export type Percent = `${number}%`;
export type Em = `${number}em`;
export type Rem = `${number}rem`;
export type VerticalHeight = `${number}vh`;
export type VerticalWidth = `${number}vw`;
export type AbstractLength = 'auto' | 'inherit';

type Length =
  | Pixel
  | Percent
  | Em
  | Rem
  | VerticalHeight
  | VerticalWidth
  | AbstractLength;

export default Length;
