import unsplash from '../API/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './Images';
import './app.css';

class App extends React.Component {
  //state is an array of images
  state = { images: [] };
  //function fires from SearchBar.js
  //term is coming from SearchBar.js
  //using async
  //using an arrow function
  onSearchSubmit = async (term) => {
    //assign response to request
    //root photo search api url
    //using unsplash.get not axios.get from unsplash component
    const response = await unsplash.get('/search/photos', {
      //url perimeters
      params: { query: term },
    });
    //set the state to the response of images
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        {/* this function is called through props */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
