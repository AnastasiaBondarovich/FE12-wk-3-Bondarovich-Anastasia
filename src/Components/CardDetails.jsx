import React, { useEffect, useContext, memo } from 'react';
import { ModalContext } from '../HOC/GlobalModalProvider';
import { getCardDatailRoute } from '../Routing/Routes';
import { Link, useParams } from 'react-router-dom';

const CardDetails = (props) => {

  const params = useParams();

  useEffect (() => {
    console.log("fetch", params.taskID);
  }, [params.taskID]);


    return (
      <div className="card-item-task">
        {`Details for task with id ${params.taskID}`}
      </div>
    )
}  



export default React.memo(CardDetails);