import React, { useEffect, memo, useContext, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeCard, removeCard } from '../../store/actions/cardsList';
import { ModalContext } from '../../HOC/GlobalModalProvider';

const StyledChangeModal = styled.div`
  background-color: #ffffff;
  border: 1px solid #666666;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  color: #221c1d;
  width: 400px;
  margin: 20px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

.popup-close {
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #666666;
  text-decoration: none;
  border: none;
  transition-duration: 0.3s;
  background-color: #ffffff;
}

.popup-close i:hover {
  transform: scale(1.2);
  background-color: rgb(0, 162, 255, 0.3);
}

#popup-title {
  margin-bottom: 20px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  border-radius: 4px;
}

.popup-name {
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 16px;
}

#popup-description {
  margin-bottom: 20px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  border-radius: 4px;
}

#popup-id {
  /* display: flex;
  justify-content: flex-start; */
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  margin-bottom: 20px;
  padding: 5px 70px;
}

#popup-id option:hover {
  background-color: rgb(0, 162, 255, 0.3);
}

.buttons-popup {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
}

#save-button-popup {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  text-align: center;
  padding: 5px 0 5px;
  border-radius: 4px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  width: 100px;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #221c1d;
  transition-duration: 0.3s;
}

#save-button-popup:hover {
  transform: scale(1.2);
  background-color: rgb(0, 162, 255, 0.3);
}

#delete-button-popup {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  text-align: center;
  padding: 5px 0 5px;
  border-radius: 4px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  width: 100px;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #221c1d;
  transition-duration: 0.3s;
}

#delete-button-popup:hover {
  transform: scale(1.2);
  background-color: rgb(0, 162, 255, 0.3);
}

`

const ChangeModal = (props) => {
  const dispatch = useDispatch();
  const setModalContent = useContext(ModalContext);
  const [changeTaskName, setChangeTaskName] = useState(props.taskName);
  const [changeTaskDescription, setChangeTaskDescription] = useState(props.taskDescription);
    
  return (
      <React.Fragment>
        <StyledChangeModal>
          <button onClick={() => { setModalContent(false) }} type="button" className={"popup-close"}>
            <i className={"far fa-window-close"}></i>
          </button>

          <p className={"popup-name"}>
            Title of task<br />
            <input value={changeTaskName} onChange={(event) => {setChangeTaskName(event.target.value)}} id="popup-title" type="text" name="data.title" size="40" />
          </p>

          <p className={"popup-name"}>
            Task description<br />
            <textarea
              value={changeTaskDescription}
              onChange={(event) => {setChangeTaskDescription(event.target.value)}}
              name="description"
              id="popup-description"
              placeholder=" Напишите комментарий..."
              cols="40"
              rows="10"></textarea>
          </p>

          <div className={"buttons-popup"}>
            <button onClick={() => {dispatch(changeCard(changeTaskName, changeTaskDescription, props.index)); console.log ('change modal', changeTaskName, changeTaskDescription, props.index); setModalContent(false)}} type="button" id="save-button-popup">Save task</button>
            <button onClick={() => {dispatch(removeCard(props.index)); setModalContent(false)}} type="button" id="delete-button-popup">Delete task</button>
          </div>
        </StyledChangeModal>
      </React.Fragment>        
    )
}  

export default React.memo(ChangeModal);