import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  state = {
    page:0,
    pictures: [],
    title: '',
  }

  
  render() {
    console.log(this.state.pictures)
    return (
      <div className='container'>
        <div className='App'>
          <header className='App-header'>
            <ul>
              <li><a href="App.js" className='logo'>SIMPLE CATALOG APP</a></li>
              <li><a href="App.js" className='menu'>Home</a></li>
            </ul>
          </header>
          <div className='cardContainer'>
            <h1>POPULAR PRODUCTS</h1>
            <hr></hr>
              {this.state.pictures.map(result => 
              <Card
              key={result.id} 
              url={result.productImage}
              title= {result.productName}
              price= {result.productPrice}
              />)}
          </div>
          <div className='buttonContainer'>
            <button onClick={this.prevPage} className='prev'>Prev</button>
            <button onClick={this.nextPage} className='next'>Next</button>
          </div>
        </div>
      </div>
    )
  }
  
  componentDidMount(){
    this.getPhotos();
  }
  
  getPhotos = (page) => {
    fetch('https://product-catalog-api.herokuapp.com/products?page='+page)
    .then(results => results.json())
    .then(data => { 
      this.setState({
        pictures: data.result.slice(0,5),
        page: data.page
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