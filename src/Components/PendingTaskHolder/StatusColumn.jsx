import React, { useCallback, useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { ModalContext } from '../../HOC/GlobalModalProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../HOC/GlobalThemeProvider';
import EditModal from '../ModalContent/EditModal';
import { useSelector } from 'react-redux';
import { cardListSelector } from '../../store/selectors/cardsList';
import { useDispatch } from 'react-redux';
import { newCard } from '../../store/actions/cardsList';

const StyledStatusColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    width: 18.625rem;
    border: 1px solid #e5e5e5;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.27);
    padding: 20px;
    margin-bottom: 16px;

  h3 {
    text-align: center;
    color: #ffffff;
    text-shadow: 0 14px 28px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.27);
  }

  .button-add {
    padding: 5px 40px;
  }
`

const StatusColumn = (props) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskUser, setNewTaskUser] = useState('');
  const setModalContent = useContext(ModalContext);
  const setIsThemeYellow = useContext(ThemeContext);

  return (
    <StyledStatusColumn>
        <div className="card-row-item-todo">
          <h3>{props.title}</h3>
          <div>
            {props.children}
          </div>
          {/* <button className="button-add" onClick={addTask}>
            Add Task
          </button> */}
          <button className="button-add" onClick={() => {setModalContent(<EditModal addTask={props.addTask} state={props.taskStatus}/>)}}>
            Add Task 
          </button>
        </div>
    </StyledStatusColumn>
  );
};

export default StatusColumn;
