import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Info from './components/Info.jsx';
import Editing from './components/Editing/Editing';
import Comparison from './components/Comparison/Comparison';
import One from './components/Statistics/Years/One'
import Graf from './components/Graf'

import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
     <div className='app-wrapper'>
        <Header className="hed" />
        <Nav />
        <div className='main'>
          <Route path='/main' component={Main} />
          <Route path='/one/:year' component={One} />
          {/* <Route path='/two' component={Two} />
          <Route path='/three' component={Three} />
          <Route path='/four' component={Four} />
          <Route path='/five' component={Five} /> */}
          <Route path='/editing' component={Editing} />
          <Route path='/comparison' component={Comparison} />
          <Route path='/graf' component={Graf} />
          <Route path='/info' component={Info} />
        </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
