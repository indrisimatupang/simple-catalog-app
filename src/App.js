import React, { Component } from 'react';
import './App.css';
import Card from './Card';


class App extends Component {
  state = {
    pictures: [],
    title: '',
  }

  render() {
    console.log(this.state.pictures)
    return (
      <div className='container'>
        <div className='App'>
          <header className='App-header'>
            <h2>SIMPLE CATALOG APP</h2>
          </header>
          {this.state.pictures.map(result => 
          <Card
          key={result.id} 
          url={result.thumbnailUrl}
          title= {result.title }
            />)}
          <div className='buttonContainer'>
            <button><b>Previous</b></button>
            <button><b>Next</b></button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.getPhotos()
  }

  getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(results => results.json())
      .then(data => { 
        this.setState({
          pictures: data,
        })
      })
  }
}

export default App;