import React, { useEffect, useContext, memo } from 'react';
import { ModalContext } from '../../HOC/GlobalModalProvider';
import { getCardDatailRoute } from '../../Routing/Routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16.625rem;
  padding: 8px;
  background-color: ${props => props.isDone ? "#ffffff" : props.theme.darkTheme};
  // background-color: ${props => props.isDone ? "#ffffff" : "#ff0"};
  border: 1px solid #666666;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  border-radius: 4px;
  margin-bottom: 16px;
  transition-duration: 0.3s;

  .card-item_text {
    color: #221c1d;
  }

  .title-task {
    color: #221c1d;
    margin-bottom: 10px;
  }

  .user-task {
    color: #221c1d;
    margin-bottom: 10px;
  }

  .card-item_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .button-change, .button-done, .button-up, .button-down, .button-delete, .button-modal {
    width: 150px;
    margin-bottom: 15 px;
  }


`

const Card = (props) => {
  const setModalContent = useContext(ModalContext);

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
      <StyledCard isDone={props.isDone} state={props.state}>
        <div className="card-item_text">
        <Link to={getCardDatailRoute(props.index)}>
          <div className="title-task">
            {`Title of task: ${props.taskName}, is ${props.isDone ? "done" : "not done"}`}
          </div>
        </Link>

        <div className="task-description">
            {`Description: ${props.taskDescription}`}
          </div>
          
          <div className="user-task">
            {`User name: ${props.userName}`}
          </div>
        </div>
        <div className="card-item_buttons">
          <button className="button-change" onClick={props.changeName(props.index)}>Change task</button>
          <button className="button-done" onClick={props.changeName(props.index)}>✔ Task is done</button>
          <button className="button-up" onClick={props.changeName(props.index)}>↑ To the up</button>
          <button className="button-down" onClick={props.changeName(props.index)}>↓ To the down</button>
          <button className="button-delete" onClick={props.removeTask(props.index)}>× Delete task</button>
          {props.children}
          <button className="button-modal" onClick={() => {setModalContent(
            <React.Fragment>
              <button onClick={() => {setModalContent(false)}}>
                Close Modal
              </button>
            </React.Fragment>
          )}}>
          Open Modal 
        </button>
        </div>
      </StyledCard>
    )
}  



export default React.memo(Card);