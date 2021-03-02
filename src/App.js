import React from 'react';
import './App.css';

import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import HeaderComponent from "./components/headerComponent"
import FooterPage from './components/footerComponent';


const App = withRouter((props) => {
  return (
    <div>
      <HeaderComponent />
      <Main />
      <FooterPage/>
    </div>

  );
});

export default (App);
