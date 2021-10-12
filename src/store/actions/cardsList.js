import { CARD_LIST_ACTIONS } from "../actoinTypes";

export const newCard = (newTaskName, newTaskDescription, newTaskUser, state) => {return ({type: CARD_LIST_ACTIONS.add, payload: {taskName: newTaskName, taskDescription: newTaskDescription, userName: newTaskUser, state: state}})} 