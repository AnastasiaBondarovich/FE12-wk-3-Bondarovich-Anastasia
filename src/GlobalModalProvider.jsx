import React, { useState, memo } from 'react';
import CardHolder from './Components/CardHolder/CardHolder';
import ModalWindow from './Components/ModalWindow'

const GlobalModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(false);
    return (
      <React.Fragment>
        {modalContent && 
        <ModalWindow>
          {modalContent}
        </ModalWindow>}
        {props.renderProps(setModalContent)}
      </React.Fragment>
    )
}  

export default React.memo(GlobalModalProvider);