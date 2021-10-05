import React, { useCallback, useContext, useEffect, useState } from 'react';
import Card from '../Cards';
import { ModalContext } from '../../HOC/GlobalModalProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../HOC/GlobalThemeProvider';

const StyledCardHolder = styled.div`
  .card-row-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  @media (max-width: 1018px) {
    .card-row-wrapper {
      justify-content: center;
      margin: 0 auto;
    }
  }

  .card-row-item-todo, .card-row-item-inprogress, .card-row-item-done {
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
  }

  h3 {
    color: #ffffff;
    text-shadow: 0 14px 28px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.27);
  }

  .button-add {
    padding: 5px 40px;
  }
`

const CardHolder = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const setModalContent = useContext(ModalContext);
  const setIsThemeYellow = useContext(ThemeContext);

  useEffect(() => {
    console.log('use effect');
    new Promise((resolve, reject) => {
      resolve([
        { taskName: 'task 0', isDone: false, userName: 'Jon' },
        { taskName: 'task 1', isDone: true, userName: 'Jack' },
      ]);
    }).then((data) => {
      setTaskList(data);
    });
    return () => {
      console.log('bue');
    };
  }, []);

  const addTask = () => {
    let newTaskList = [...taskList];
    newTaskList.push({
      taskName: newTaskName,
      isDone: true,
      userName: 'Jon',
    });
    setTaskList(newTaskList);
    setNewTaskName('');
  };

  const removeTask = useCallback(
    (index) => () => {
      let newTaskList = [...taskList];
      newTaskList.splice(index, 1);
      setTaskList(newTaskList);
    },
    [taskList]
  );

  const changeName = useCallback(
    (index) => () => {
      let result = prompt('New title of task:', '');
      let newTaskList = [...taskList];
      newTaskList[index].taskName = result;
      setTaskList(newTaskList);
    },
    [taskList]
  );

  console.log('cardHolder render');

  return (
    <StyledCardHolder>
      <button onClick={() => {setIsThemeYellow(true)}}>Change Theme</button>
      <br/>
      <Link to={'/card/123'}>Go</Link>
      <br/>
      <input value={newTaskName} onChange={(event) => {setNewTaskName(event.target.value)}} />
      <div className="card-row-wrapper">
        <div className="card-row-item-todo">
          <h3>To Do List</h3>
          <div>
            {taskList.map((task, index) => {
              return (
                <div key={task.taskName}>
                  <Card
                    taskName={task.taskName}
                    removeTask={removeTask}
                    isDone={task.isDone}
                    userName={task.userName}
                    index={index}
                    changeName={changeName}
                  />
                </div>
              );
            })}
          </div>
          <button className="button-add" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="card-row-item-inprogress">
          <h3>List In Progress</h3>
          <div>
            {taskList.map((task, index) => {
              return (
                <div key={task.taskName}>
                  <Card
                    taskName={task.taskName}
                    removeTask={removeTask}
                    isDone={task.isDone}
                    userName={task.userName}
                    index={index}
                    changeName={changeName}
                  />
                </div>
              );
            })}
          </div>
          <button className="button-add" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="card-row-item-done">
          <h3>Done List</h3>
          <div>
            {taskList.map((task, index) => {
              return (
                <div key={task.taskName}>
                  <Card
                    taskName={task.taskName}
                    removeTask={removeTask}
                    isDone={task.isDone}
                    userName={task.userName}
                    index={index}
                    changeName={changeName}
                  />
                </div>
              );
            })}
          </div>
          <button className="button-add" onClick={addTask}>
            Add Task
          </button>
        </div>
        {/* <button className="button-modal" onClick={() => {setModalContent("Modal opened from CardHolder")}}>
          Open Modal 
      </button> */}
      </div>
    </StyledCardHolder>
  );
};

export default CardHolder;
