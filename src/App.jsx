import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CardHolder from './Components/CardHolder/CardHolder';
import GlobalModalProvider from './HOC/GlobalModalProvider';
import RootRouter from './Routing/Root';
import MainLayout from './Layouts/MainLayout';

const App = (props) => {
  return (
    <React.Fragment>
      <GlobalModalProvider>
        <BrowserRouter>
          <MainLayout>
            <RootRouter/>
          </MainLayout>
        </BrowserRouter>
      </GlobalModalProvider>
    </React.Fragment>
  )
}  

export default App;