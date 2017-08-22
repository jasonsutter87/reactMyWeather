import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';



class App extends React.Component{
  constructor(){
    super();
    this.state={};
  }

  componentWillMount(){
    axios.get('https://api.breezometer.com/baqi', {
      params: {
        lat: 30.2688806,
        lon: -97.7427527,
        key: 'a3b8b658b30540b19f033f9b5dfe6511',
      }
    })
    .then((response) => {
      this.setState({
        weather: response.data.breezometer_description,
      });
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
  }

  render() {
    return (
      <div>
        <h3>
          Todays air is: {this.state.weather}
        </h3>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
