import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = (props) => {
  return (
    <div className="board">
      <div className={'header'}> 
        Header 
      </div>
      <div className={'contentWithNavbar'}>
        <div className={'navbar'}>
          <Link to={'/cards/done'}> Done Tasks </Link>
        </div>
        <div className={'content'}>
          {props.children}
        </div>
      </div>
      <div className={'footer'}> 
        Footer 
      </div>
    </div>
  )
};

export default MainLayout;