import React from 'react';
import Card from '../../modules/cards';

class CardHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        {taskName: 'Brush teeth', isDone: false },
        {taskName: 'Brush teeth', isDone: false },
      ],
    };
  }

  addTask = () => {
    let newTaskList = [...this.state.taskList];
    newTaskList.push({taskName: 'Brush teeth', isDone: true});
    this.setState({taskList:newTaskList});
  }

  changeName = (index) => () => {
    let newTaskList = [...this.state.taskList];
    newTaskList[index].taskName = 'Wash hands';
    this.setState({taskList:newTaskList});
  }

  render() {
    return (
      <div>
        <div>
          {this.state.taskList.map((task, index) => {
            return (
              <div>
                <Card taskName={task.taskName} isDone={task.isDone} />
                <button onClick={this.changeName(index)}>Change Name</button>
              </div>
            )
          })}
        </div>
        <button onClick={this.addTask}>Add Task</button>
      </div>
    );
  }
}

export default CardHolder;