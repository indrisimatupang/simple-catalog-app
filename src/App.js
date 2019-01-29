import React, { Component } from 'react';
import './css/App.css';
import './css/Details.css';
import Card from './Card';
import Details from './Details';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    page:1,
    pictures: [],
    title: '',
  }

  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.Home} />
          <Route path="/img/:id" component={this.ImageView} />
        </div>
      </Router>
    )
  }
  
  
  // fetch data
  componentDidMount(){
    this.getPhotos(this.state.page);
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

  // pagination
  nextPage = (page) => {
    this.getPhotos(this.state.page + 1);
  };
  
  prevPage = (page) => {
    this.getPhotos(this.state.page - 1);
  };

  Home = () => {
    return(
      <div className='container'>
          <div className='App'>
            <header className='App-header'>
              <ul>
                <li><a href="/" className='logo'>SIMPLE CATALOG APP</a></li>
                <li><a href="/" className='menu'>Home</a></li>
              </ul>
            </header>
            <div className='cardContainer'>
              <h1>POPULAR PRODUCTS</h1>
              <hr></hr>
                {this.state.pictures.map((result, index) => 
                <Link 
                  key={index}
                  to={{
                    pathname: `/img/${index}`
                  }}
                  style={{ color: '#000' }}
                >
                  <Card
                  key={index} 
                  url={result.productImage}
                  title= {result.productName}
                  price= {result.productPrice}
                  />
                </Link>
                )}
            </div>
            <div className='buttonContainer'>
              <button onClick={this.prevPage} className='prev'>Prev</button>
              <button onClick={this.nextPage} className='next'>Next</button>
            </div>
          </div>
        </div>
    )
  }

  
  ImageView= ({ match, history }) => {
    let picture = this.state.pictures[parseInt(match.params.id, 10)];

    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
<<<<<<< HEAD
    if( picture ){
=======

    if ( picture ){
>>>>>>> 5e5aa84a1f2070851e2575c9417c3214c4ec13ba
      return (
        <div>
          <header className='App-header'>
            <ul>
              <li><a href="/" className='logo'>SIMPLE CATALOG APP</a></li>
              <li><a href="/" className='menu'>Home</a></li>
            </ul>
          </header>
          <div>
            <Details 
            key={picture.id}
            url={picture.productImage}
            title= {picture.productName}
            price= {picture.productPrice}
            />
            <button onClick={back} className='backButton'>Back</button>
          </div>
        </div>
      );
    }
    else {
      return null
    }
  }
}

export default App;