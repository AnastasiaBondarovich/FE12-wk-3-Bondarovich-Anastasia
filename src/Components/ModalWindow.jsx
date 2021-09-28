import React, { useEffect, memo } from 'react';

const ModalWindow = (props) => {
    return (
      <div className="modal-item">
        {props.children}
      </div>
    )
}  

export default React.memo(ModalWindow);