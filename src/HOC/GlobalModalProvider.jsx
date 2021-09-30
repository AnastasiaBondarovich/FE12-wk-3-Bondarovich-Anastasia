import React, { useState, memo } from 'react';
import CardHolder from '../Components/CardHolder/CardHolder';
import ModalWindow from '../Components/ModalWindow';

export const ModalContext = React.createContext(false);

const GlobalModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(false);
    return (
      <React.Fragment>
        {modalContent && 
        <ModalWindow>
          {modalContent}
        </ModalWindow>}
        <ModalContext.Provider value={setModalContent}>
          {props.children}
        </ModalContext.Provider>
      </React.Fragment>
    )
}  

export default React.memo(GlobalModalProvider);