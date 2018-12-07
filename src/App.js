import React, { Component } from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import Album from "./components/Album/Album";

function processData(data) {
  return new Promise((resolve, reject) => {
    const orderedData = _.orderBy(data, ['albumId', 'id'], ['desc', 'desc']);
    const groupedData = _.groupBy(orderedData, 'albumId', 'desc');
    const keys = Object.keys(groupedData);
    const lastKeys = _.orderBy(keys, (o) => Number.parseInt(o), 'desc').slice(0, 3);
    resolve(lastKeys.map((key) => groupedData[key]));
  });
}

class App extends Component {
  state = {
    albums: [],
  };

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'get',
    })
      .then(response => response.json())
      .then(data => processData(data))
      .then(albums => this.setState({ albums }));
  }

  render() {
    const { albums } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Albums BD
        </header>
        <div className="album-container">
          {
            albums.map((album, index) => (
                <Album
                  index={index}
                  albumId={album[0].albumId}
                  photos={album.slice(0,2)} key={album[0].albumId}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
