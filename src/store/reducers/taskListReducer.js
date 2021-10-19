import { CARD_LIST_ACTIONS } from "../actoinTypes";

const taskListReducer = (state, action) => {
  let newTaskList = [];
  switch (action.type) {
    case (CARD_LIST_ACTIONS.add) : 
    newTaskList = [...state.taskList];
    newTaskList.push({
      taskName: action.payload.taskName,
      taskDescription: action.payload.taskDescription,
      isDone: false,
      userName: action.payload.userName,
      state: action.payload.state,
      index: action.payload.index,
    });
    return {...state, 
      taskList: newTaskList};

    case (CARD_LIST_ACTIONS.remove) : 
    newTaskList = [...state.taskList];
    newTaskList.splice(action.payload, 1);
    return {...state, 
      taskList: newTaskList};

    case (CARD_LIST_ACTIONS.change) : 
    newTaskList = [...state.taskList];
    // let elementToChange = newTaskList.find(item => item.index === action.payload.index);
    //   console.log ('payload', elementToChange, action.payload.index)

    console.log ('payload', newTaskList[action.payload.index], action.payload.index)
    //   newTaskList[action.payload.index].taskName = taskName: action.payload.taskName;
    //   newTaskList[action.payload.index].taskDescription = taskDescription: action.payload.taskDescription;
    //   console.log(newTaskList);
    
    // return {...state, 
    //   taskList: newTaskList};
  
    default: return {... state}
  }
}

export default taskListReducer;