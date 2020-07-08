import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  //one way to handel onChange
  // pass event into function
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  onFormSubmit = (event) => {
    //prevent screen refresh
    event.preventDefault();
    //this.state.term only works within an arrow function. Arrow functions auto bind this.
    //call onSubmit function at app.js level using props
    //pass in the state term
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            {/* onChange is a unique name that calls onInputChange. there is also onClick, onSubmit ext*/}
            {/* onChange={this.onInputChange} */}
            {/* Alternative where "e" = event: onChange=(e) => console.log(e.target.value) */}
            <input
              type="text"
              //update the state called term with the event input value
              onChange={(e) => this.setState({ term: e.target.value })}
              //pulls value from the state
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
