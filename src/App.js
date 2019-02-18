import React, { Component } from 'react';
import { ContextProvider } from './components/context/ContextProvider';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <ContextProvider>
          <Layout />
      </ContextProvider>
    );
  }
}

export default App;
