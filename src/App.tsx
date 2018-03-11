import * as React from 'react';
import InputListContainer from './containers/inputListContainer';
import styled from 'styled-components';
import './App.css';

const logo = require('./logo.svg');

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Flex>
          <InputListContainer />
        </Flex>
      </div>
    );
  }
}

export default App;
