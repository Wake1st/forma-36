import { create } from '@storybook/theming';
import tokens from '@contentful/forma-36-tokens';

export default create({
  // Is this a 'light' or 'dark' theme?
  base: 'light',

  // Color palette
  colorPrimary: tokens.colorPrimary,

  // UI
  appBg: tokens.colorElementLightest,
  appContentBg: tokens.colorWhite,
  appBorderColor: tokens.colorElementLight,
  appBorderRadius: 4,

  // Fonts
  fontBase: tokens.fontStackPrimary,
  fontCode: tokens.fontStackMonospace,

  // Text colors
  textColor: tokens.colorTextDark,
  textInverseColor: tokens.colorWhite,

  // Toolbar default and active colors
  barTextColor: tokens.colorText,
  barSelectedColor: tokens.colorPrimary,
  barBg: tokens.colorWhite,

  // Form colors
  inputBg: tokens.colorWhite,
  inputBorder: tokens.colorElementMid,
  inputTextColor: tokens.colorTextDark,
  inputBorderRadius: 2,
});
