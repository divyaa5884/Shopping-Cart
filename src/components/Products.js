import React, { Component } from 'react';
import Data from './../data';


class Products extends Component {
    state = {
    	data: Data,
    	isLoadedFirst: false
    }
	removeFromCart = (item) => {
		var newData = this.state.data.filter((ele)=> {
			return item.id !== ele.id;
		})
		console.log(newData);
		this.setState({data: newData});
	}
	decreaseQuantity = (item) => {
		console.log("decrease");
		if(item.quantity === 1){
			// this.removeCart(item);
		}
		var newData = this.state.data
		newData.forEach((ele)=> {
			if(item.id === ele.id) {
				item.quantity = item.quantity - 1;
			}
		})
		console.log(newData);
		this.setState({data: newData});
	}
	increaseQuantity = (item) => {
		console.log("Increase");
		var newData = this.state.data
		newData.forEach((ele)=> {
			if(item.id === ele.id) {
				item.quantity = item.quantity + 1;
			}
		})
		console.log(newData);
		this.setState({data: newData});
	}
    showProducts = () => {
	    // console.log(data);
	    if(!this.state.isLoadedFirst){
	    	const newData = this.state.data;
	    	newData.forEach((item)=>{
	    		item.quantity = 1;
	    	})
	    	this.setState({data: newData, isLoadedFirst: true});
	    }
	    console.log(this.state.data);
	    return(
		    this.state.data.map((item, index) => {
		    	return(
		    		<div className="row">
					    <div className= "col-xs-12 list-group-item productValue" key={index}>
				          <div className=" col-xs-5 card-body itemsValue">
				            <div className="row">
					            <div className="col-xs-12 itemsdata">
					              <div className="pull-left">
					                <img className="avatar" src={item.img_url} alt={item.name}/>
					                &nbsp;&nbsp;
					                <span id="itemName">{item.name}</span>
					              </div>
					              <div className="pull-right">
					                <button className="delete" onClick={() => this.removeFromCart(item)}>x</button>
					              </div>
					            </div>
					        </div>
				          </div>
				          <div className="col-xs-5 qtyValue">
				            <button className="minus" onClick={() => this.decreaseQuantity(item)}>
				              -
				            </button>
				            <div className="inputQty">
				             { item.quantity }
				            </div>
				            <button className="plus" onClick={() => this.increaseQuantity(item)}>
				              +
				            </button>
				          </div>
				          <div className="col-xs-2 priceValue">
				            <span>${(item.price*item.quantity)}</span>
				          </div>
				        </div>
				    </div>
			    )
		    })
		);
    }

    render() {
        return (
            <div>
			   <div className="product-list">{this.showProducts()}</div>
			</div>
        );
    }
}

export default Products;
