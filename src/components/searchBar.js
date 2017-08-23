import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
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


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City:<br />
            <input type="text" value={this.state.address} onChange={this.handleChangeAddress}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  };
}

export default SearchBar;
