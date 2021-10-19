import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import CardHolder from '../Components/CardHolder/CardHolder';
import CardDetails from '../Components/CardDetails';
import StatusColumn from '../Components/PendingTaskHolder/StatusColumn';
import { TASK_STATUS } from '../constants/tasksStatus';
import EditModal from '../Components/ModalContent/EditModal';

const RootRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={"/card/:taskID"}>
          <CardDetails/>
        </Route>
        <Route path={"/cards/pending"}>
          <StatusColumn title={'List To Do'} taskStatus={TASK_STATUS.pending}/>
        </Route>
        <Route path={"/cards"}>
          <CardHolder/>
        </Route>
        <Route path={"/"}>
          <Redirect to={"/cards"}/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default RootRouter;