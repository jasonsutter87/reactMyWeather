import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';


class App extends React.Component{

  render() {
    return (
      <h1>hello world</h1>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
