import { CARD_LIST_ACTIONS } from "../actoinTypes";

export const newCard = (newTaskName, newTaskDescription, newTaskUser, state, index) => {return ({type: CARD_LIST_ACTIONS.add, payload: {taskName: newTaskName, taskDescription: newTaskDescription, userName: newTaskUser, state: state, index: index}})}

export const removeCard = (index) => {return ({type: CARD_LIST_ACTIONS.remove, payload: index})} 

export const changeCard = (changeTaskName, changeTaskDescription, index) => {return ({type: CARD_LIST_ACTIONS.change, payload: {taskName: changeTaskName, taskDescription: changeTaskDescription, index: index}})} 