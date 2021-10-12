import React from 'react';
import { addDecorator } from '@storybook/react';
import {
  ThemeProvider,
} from "styled-components";
import { withThemes } from '@react-theming/storybook-addon';
import {globalStyle, GlobalStyles, secondGlobalStyle} from '../src/HOC/GlobalThemeProvider';
import { BrowserRouter } from 'react-router-dom';

addDecorator(withThemes(ThemeProvider, [globalStyle, secondGlobalStyle]));

export const decorators = [
  Story => (
    <>
      <BrowserRouter>
        <GlobalStyles/>
        <Story />
      </BrowserRouter>
    </>
  ),];



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}