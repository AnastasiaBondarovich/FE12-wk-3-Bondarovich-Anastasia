import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CardHolder from './Components/CardHolder/CardHolder';
import GlobalModalProvider from './HOC/GlobalModalProvider';
import RootRouter from './Routing/Root';
import MainLayout from './Layouts/MainLayout';
import GlobalThemeProvider from './HOC/GlobalThemeProvider';
import GlobalStoreProvider from './HOC/GlobalStoreProvider';

const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalStoreProvider>
          <GlobalThemeProvider>
            <GlobalModalProvider>
              <MainLayout>
                <RootRouter />
              </MainLayout>
            </GlobalModalProvider>
          </GlobalThemeProvider>
        </GlobalStoreProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
