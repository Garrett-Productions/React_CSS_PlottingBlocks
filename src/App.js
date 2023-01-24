import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Navigation from './components/Navigation';
import Advertisement from './components/Advertisement'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
