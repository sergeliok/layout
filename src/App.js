import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Layout sidebar={<Sidebar/>}>djnjsdn</Layout>
    );
  }
}

export default App;
