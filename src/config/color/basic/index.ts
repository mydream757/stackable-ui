import BasicDarkColorSet from 'src/config/color/basic/dark';
import BasicLightColorSet from 'src/config/color/basic/light';

const BasicColorSet = {
  ...BasicDarkColorSet,
  ...BasicLightColorSet
}

export type BasicColor = keyof typeof BasicDarkColorSet | keyof typeof BasicLightColorSet;
export default BasicColorSet;