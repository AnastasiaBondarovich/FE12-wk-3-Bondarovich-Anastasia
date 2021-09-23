import React from 'react';

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.taskName) {
      return null
    }

    return (
      <div className="card-item-task">
        <div className="card-item_text">
          <div className="title-task">
            {`Title of task: ${this.props.taskName}, is ${this.props.isDone ? "done" : "not done"}`}
          </div>
          <div className="user-task">
            {`User name: ${this.props.userName}`}
          </div>
        </div>
        <div className="card-iem_buttons">
          <button className="button-change" onClick={this.props.changeName(this.props.index)}>Change task</button>
          <button className="button-done" onClick={this.props.changeName(this.props.index)}>✔ Task is done</button>
          <button className="button-up" onClick={this.props.changeName(this.props.index)}>↑ To the up</button>
          <button className="button-down" onClick={this.props.changeName(this.props.index)}>↓ To the down</button>
          <button className="button-delete" onClick={this.props.changeName(this.props.index)}>× Delete task</button>
        </div>
      </div>
    )
  }

}


export default Card;