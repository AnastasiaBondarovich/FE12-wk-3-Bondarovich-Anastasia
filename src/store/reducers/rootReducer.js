import { combineReducers } from "redux";
import taskListReducer from "./taskListReducer";

const rootReducer = combineReducers({
  taskListReducer
})

export default rootReducer;