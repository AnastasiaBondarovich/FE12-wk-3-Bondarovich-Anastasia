import React, { useEffect, memo } from 'react';
import styled from 'styled-components';

const StyledModalWindow = styled.div`
  position: absolute;
  right: 30%;
  left: 30%;
  top: 20%;
  background-color: rgba(3, 36, 30, 0.966);
  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 100;

`

const ModalWindow = (props) => {
    return (
      <StyledModalWindow>
        {props.children}
      </StyledModalWindow>
    )
}  

export default React.memo(ModalWindow);