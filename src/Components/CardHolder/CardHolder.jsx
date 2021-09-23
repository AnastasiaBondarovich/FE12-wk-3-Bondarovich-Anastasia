import React from 'react';
import Card from '../cards';

class CardHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
  }
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
        resolve([{ taskName: 'task 0', isDone: false, userName: 'Jon' }, { taskName: 'task 1', isDone: false, userName: 'Jack' }])
    }).then((data) => {
        this.setState({ taskList: data })
    })
}

  addTask = () => {
    let newTaskList = [...this.state.taskList];
    newTaskList.push({taskName:  `task ${this.state.taskList.length}`, isDone: true, userName: 'Jon'});
    this.setState({taskList:newTaskList});
  }

  changeName = (index) => () => {
    let result = prompt('New title of task:', '')
    let newTaskList = [...this.state.taskList];
    newTaskList[index].taskName = result;
    this.setState({taskList:newTaskList});
  }

  render() {
    return (
      <div className="card-row-wrapper">
        <div className="card-row-item-todo">
          <h3>To Do List</h3>
          <div>
          {this.state.taskList.map((task, index) => {
            return (
              <div>
                <Card taskName={task.taskName} isDone={task.isDone} userName={task.userName} index={index} changeName={this.changeName}/>
              </div>
            )
          })}
        </div>
        <button className="button-add" onClick={this.addTask}>Add Task</button>
        </div>

        <div className="card-row-item-inprogress">
        <h3>List In Progress</h3>
          <div>
          {this.state.taskList.map((task, index) => {
            return (
              <div>
                <Card taskName={task.taskName} isDone={task.isDone} userName={task.userName}  index={index} changeName={this.changeName}/>
              </div>
            )
          })}
        </div>
        <button className="button-add" onClick={this.addTask}>Add Task</button>
        </div>

        <div className="card-row-item-done">
        <h3>Done List</h3>
          <div>
          {this.state.taskList.map((task, index) => {
            return (
              <div>
                <Card taskName={task.taskName} isDone={task.isDone} userName={task.userName}  index={index} changeName={this.changeName}/>
              </div>
            )
          })}
        </div>
        <button className="button-add" onClick={this.addTask}>Add Task</button>
        </div>
        
      </div>
    );
  }
}

export default CardHolder;