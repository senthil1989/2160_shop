import React from 'react';
import './App.scss';
import Header from './containers/Header';
import { connect } from 'react-redux';
import MainSection from './containers/MainSection';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <MainSection />
    </div>
  );
}


export default connect()(App);
