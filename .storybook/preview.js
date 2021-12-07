// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  // actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
