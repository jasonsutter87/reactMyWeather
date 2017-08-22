import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';




class Ui extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      address: null,
    };
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChangeAddress(event) {
    this.setState({
      address: event.target.value
    });
  }



  handleSubmit(event) {
    alert('The City was submitted: ' + this.state.address );
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input type="text" value={this.state.address} onChange={this.handleChangeAddress}/><br /><br />
        </label><br />
        <input type="submit" value="Submit" />
      </form>

    )
  }
}

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
        color: response.data.breezometer_color,
      });
    })
    .catch(function (error) {
      return error;
    })
  }


  render() {
    return (
      <div>

        <Ui />
        <h3>
        Todays air is: {this.state.weather}<br />

        Todays air is: {this.state.color}
        </h3>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
