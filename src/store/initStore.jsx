import { createStore } from 'redux';
import { CARD_LIST_ACTIONS } from './actoinTypes';
import { newCard } from './actions/cardsList';
import { TASK_STATUS } from '../../src/constants/tasksStatus'

let newTaskList = [{ taskName: 'task 0', taskDescription: 'Define more tags in components.', isDone: false, userName: 'Jon', state: TASK_STATUS.pending },
{ taskName: 'task 1', taskDescription: 'Add more user avatars.', isDone: true, userName: 'Jack', state: TASK_STATUS.progress },
{ taskName: "Task 3", isDone: true, taskDescription: "Task 3 description", state: TASK_STATUS.done },
]

const initialState = {taskList: newTaskList};

const rootReducer = (state, action) => {
  switch (action.type) {
    case (CARD_LIST_ACTIONS.add) : 
    let newTaskList = [...state.taskList];
    newTaskList.push({
      taskName: action.payload.taskName,
      taskDescription: action.payload.taskDescription,
      isDone: true,
      userName: action.payload.userName,
      state: action.payload.state,
    });
    return {...state, 
      taskList: newTaskList};
    default: return {... state}
  }
}

export const store = createStore(rootReducer, initialState);