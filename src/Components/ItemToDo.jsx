import React, { useCallback, useContext, useEffect, useState } from 'react';
import Card from './Cards';
import { ModalContext } from '../HOC/GlobalModalProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EditModal from './ModalContent/EditModal';

const StyledCardHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 18.625rem;
    border: 1px solid #e5e5e5;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.27);
    padding: 20px;
    margin-bottom: 16px;

    h3 {
      color: #ffffff;
      text-shadow: 0 14px 28px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.27);
    }
  
    .button-add {
      padding: 5px 40px;
    }
`

const ItemToDo = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskUser, setNewTaskUser] = useState('');
  const setModalContent = useContext(ModalContext);

  return (
        <div className="card-row-item-todo">
          {props.children}
          <h3>To Do List</h3>
          <div>
            {taskList.map((task, index) => {
              return (
                <div key={props.task.taskName}>
                  <Card
                    taskName={props.task.taskName}
                    removeTask={props.removeTask}
                    isDone={props.task.isDone}
                    userName={props.task.userName}
                    index={props.index}
                    changeName={props.changeName}
                  />
                </div>
              );
            })}
          </div>
          <button className="button-add" onClick={() => {setModalContent(<EditModal addTask={addTask}/>)}}>
            Add Task 
          </button>
        </div>

        
  );
};

export default ItemToDo;
