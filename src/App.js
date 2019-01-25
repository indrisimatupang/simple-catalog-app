import React, { Component } from 'react';
import './App.css';
import Card from './Card';


class App extends Component {
  state = {
    page:1,
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
          <div className='cardContainer'>
            {this.state.pictures.map(result => 
            <Card
            key={result.id} 
            url={result.productImage}
            title= {result.productName}
            price= {result.productPrice}
            />)}
          </div>
          <div className='buttonContainer'>
            <button onClick={this.prevPage}><b>Previous</b></button>
            <button onClick={this.nextPage}><b>Next</b></button>
          </div>
        </div>
      </div>
    )
  }
  
  componentDidMount(){
    this.getPhotos(1)
  }
  
  getPhotos = (page) => {
    fetch('https://product-catalog-api.herokuapp.com/products?page='+page)
    .then(results => results.json())
    .then(data => { 
      this.setState({
        pictures: data.result,
      })
    })
  }
  
  nextPage = (page) => {
    this.getPhotos(this.state.page+1);
  };
  
  prevPage = (page) => {
    this.getPhotos(this.state.page-1);
  };
}

export default App;