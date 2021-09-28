import React, { useEffect, memo } from 'react';

const Card = (props) => {
  useEffect (() => {
    return () => {
      console.log ("bue bue");
    }
  }, []);

  console.log ("card render");

  if (!props.taskName) {
      return null
    };

    return (
      <div className="card-item-task">
        <div className="card-item_text">
          <div className="title-task">
            {`Title of task: ${props.taskName}, is ${props.isDone ? "done" : "not done"}`}
          </div>
          <div className="user-task">
            {`User name: ${props.userName}`}
          </div>
        </div>
        <div className="card-iem_buttons">
          <button className="button-change" onClick={props.changeName(props.index)}>Change task</button>
          <button className="button-done" onClick={props.changeName(props.index)}>✔ Task is done</button>
          <button className="button-up" onClick={props.changeName(props.index)}>↑ To the up</button>
          <button className="button-down" onClick={props.changeName(props.index)}>↓ To the down</button>
          <button className="button-delete" onClick={props.removeTask(props.index)}>× Delete task</button>
          {props.children}
          <button className="button-modal" onClick={() => {props.setIsModalOpen(
            <React.Fragment>
              <button onClick={() => {props.setIsModalOpen(false)}}>
                Close Modal
              </button>
            </React.Fragment>
          )}}>
          Open Modal 
        </button>
        </div>
      </div>
    )
}  



export default React.memo(Card);