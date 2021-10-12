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
import StatusColumn from '../PendingTaskHolder/StatusColumn';
import { TASK_STATUS } from '../../constants/tasksStatus';

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

`

const CardHolder = (props) => {
  const taskList = useSelector(cardListSelector);
  const dispatch = useDispatch();
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskUser, setNewTaskUser] = useState('');
  const setModalContent = useContext(ModalContext);
  const setIsThemeYellow = useContext(ThemeContext);

  useEffect(() => {
    console.log('use effect');
    new Promise((resolve, reject) => {
      resolve([
        { taskName: 'task 1', taskDescription: 'Define more tags in components.', isDone: false, userName: 'Jon', state: TASK_STATUS.pending },
        { taskName: 'task 2', taskDescription: 'Add more user avatars.', isDone: true, userName: 'Jack', state: TASK_STATUS.progress },
        { taskName: "Task 3", isDone: true, taskDescription: "Task 3 description", state: TASK_STATUS.done },
      ]);
    }).then((data) => {
      
    });
    return () => {
      console.log('bue');
    };
  }, []);

  const addTask = (newTaskName, newTaskDescription, newTaskUser, state) => {
    console.log('addTask', newTaskName, newTaskDescription, newTaskUser, state);
    dispatch(newCard(newTaskName, newTaskDescription, newTaskUser, state));
    // let newTaskList = [...taskList];
    // newTaskList.push({
    //   taskName: newTaskName,
    //   taskDescription: newTaskDescription,
    //   isDone: true,
    //   userName: newTaskUser,
    // state: state,
    // });
    // setTaskList(newTaskList);
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
        <StatusColumn title={'List To Do'} addTask={addTask} taskStatus={TASK_STATUS.pending}>
        {taskList.map((task, index) => {
          if (task.state === TASK_STATUS.pending){
            return (
                <div key={task.taskName}>
                  <Card
                    taskName={task.taskName}
                    taskDescription={task.taskDescription}
                    removeTask={removeTask}
                    isDone={task.isDone}
                    userName={task.userName}
                    index={index}
                    changeName={changeName}
                    state={task.state}
                  />
                </div>
              );
          }
          // console.log('cardholder', task.state)
              
            })}
        </StatusColumn>

        <StatusColumn title={'List In Progress'} addTask={addTask} taskStatus={TASK_STATUS.progress}>
        {taskList.map((task, index) => {
          if (task.state === TASK_STATUS.progress){
            return (
                <div key={task.taskName}>
                  <Card
                    taskName={task.taskName}
                    taskDescription={task.taskDescription}
                    removeTask={removeTask}
                    isDone={task.isDone}
                    userName={task.userName}
                    index={index}
                    changeName={changeName}
                    state={task.state}
                  />
                </div>
              );
          }
              
            })}
        </StatusColumn>
    
        <StatusColumn title={'Done List'} addTask={addTask} taskStatus={TASK_STATUS.done}>
        {taskList.map((task, index) => {
          if (task.state === TASK_STATUS.done) {
            return (
                <div key={task.taskName}>
                  <Card
                    taskName={task.taskName}
                    taskDescription={task.taskDescription}
                    removeTask={removeTask}
                    isDone={task.isDone}
                    userName={task.userName}
                    index={index}
                    changeName={changeName}
                    state={task.state}
                  />
                </div>
              );
          }
              
            })}
        </StatusColumn>
      </div>

    </StyledCardHolder>
  );
};

export default CardHolder;
