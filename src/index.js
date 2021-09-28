import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styles/index.scss';

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

// console.log("Работает!", summ (22, 21));

// const taskList = [{taskName: "Brush teeth", isDone: false}, {taskName: "Brush teeth", isDone: false}];


// const cardList = taskList.map(task => {
//   return new Card(task.taskName, task.isDone, document.getElementById("root"));
// });

// cardList.forEach(card => {
//   card.changeName("New", false);
// });