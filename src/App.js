import React, { Component } from 'react';
import Products from './components/Products';
import './App.css'
import data from './data';

class App extends Component {

    render() {
        console.log(data);
        return (

            <div className ="ui container">
              <div className = "product-header">
                <Products />
              </div>
            </div>
        );
    }
}

export default App;
