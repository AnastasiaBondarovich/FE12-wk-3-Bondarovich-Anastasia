import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background_grass from '../Assets/Images/background_grass.jpg';

const StyledMainLayout = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background_grass});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    z-index: -2;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    position: relative;
    z-index: 1;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: #2b2e4a;
      opacity: 0.5;
      display: block;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
  }

  
  .footer {
    display: flex;
    justify-content: center;
    margin-top: 6.25rem;
    padding: 15px 0;
    position: relative;
    z-index: 1;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: #313454;
      opacity: 0.5;
      display: block;
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
    }
  }

`

const MainLayout = (props) => {
  return (
    <StyledMainLayout>
      <div className={'header'}> 
        Header 
        <div className={'navbar'}>
          <Link to={'/cards/pending'}> List To Do </Link>
          <Link to={'/cards/progress'}> List In Progress </Link>
          <Link to={'/cards/done'}> Done List </Link>
        </div>
      </div>
      <div className={'contentWithNavbar'}>
        
        <div className={'content'}>
          {props.children}
        </div>
      </div>
      <div className={'footer'}> 
        Footer 
      </div>
    </StyledMainLayout>
  )
};

export default MainLayout;