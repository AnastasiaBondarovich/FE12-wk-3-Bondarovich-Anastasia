import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CardHolder from './Components/CardHolder/CardHolder';
import GlobalModalProvider from './HOC/GlobalModalProvider';
import RootRouter from './Routing/Root';
import MainLayout from './Layouts/MainLayout';
import GlobalThemeProvider from './HOC/GlobalThemeProvider';

const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalThemeProvider>
          <GlobalModalProvider>
            <MainLayout>
              <RootRouter />
            </MainLayout>
          </GlobalModalProvider>
        </GlobalThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
