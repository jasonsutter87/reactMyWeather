import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';
import Swatch from './colorSwatch';

class App extends React.Component{
  render() {
    return (
      <div>
      <SearchBar />
      <Swatch />
      </div>
    )
  };
}

export default App;
