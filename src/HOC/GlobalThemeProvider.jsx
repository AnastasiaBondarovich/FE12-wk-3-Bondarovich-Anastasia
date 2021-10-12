import React, { useEffect, memo, useState } from 'react';
import { ThemeProvider, StyleSheetManager, createGlobalStyle } from "styled-components";

export const ThemeContext = React.createContext('');

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
`

export const globalStyle = {darkTheme: "#ff0"};
export const secondGlobalStyle = {darkTheme: "#ffffff"};

const GlobalThemeProvider = (props) => {
  const [isThemeYellow, setIsThemeYellow] = useState(false);
  
  return (
    <StyleSheetManager disableVendorPrefixes={true}>
      <ThemeProvider theme={isThemeYellow ? globalStyle : secondGlobalStyle}>
        <ThemeContext.Provider value={setIsThemeYellow}>
          <GlobalStyles/>
            {props.children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </StyleSheetManager>
  )
}  

export default React.memo(GlobalThemeProvider);