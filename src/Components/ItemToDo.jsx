import React, { useCallback, useContext, useEffect, useState } from 'react';
import Card from './Cards';
import { ModalContext } from '../HOC/GlobalModalProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const StyledCardHolder = styled.div`

// `

const ItemToDo = (props) => {

  const setModalContent = useContext(ModalContext);

  return (
        <div className="card-row-item-todo">
          {props.children}
          <h3>To Do List</h3>
          <div>
            {props.taskList.map((task, index) => {
              return (
                <div key={props.task.taskName}>
                  <Card
                    taskName={props.task.taskName}
                    removeTask={props.removeTask}
                    isDone={props.task.isDone}
                    userName={props.task.userName}
                    index={props.index}
                    changeName={props.changeName}
                  />
                </div>
              );
            })}
          </div>
        </div>

        
  );
};

export default ItemToDo;
