import axios from 'axios';

import React from 'react';
import { Login } from '../adminlogin/login';

export class Shopper extends React.Component{
constructor(){
    super();
    this.state={
        categories:[],
        products:[],
        CardItems:[]

    }
    this.handleCategoryChange=this.handleCategoryChange.bind(this)
}

LoadCategories(){
    axios.get("http://fakestoreapi.com/products/categories")
    .then(responce=>{
        responce.data.unshift("all");
        this.setState({
            categories:responce.data
        })
    })
}

LoadProducts(url){
    axios.get(url)
    .then(responce=>{
        responce.data.unshift("all");
        this.setState({
            products:responce.data
        }
    )
    })
}

componentDidMount(){
    this.LoadCategories();
    this.LoadProducts("http://fakestoreapi.com/products")
}

handleCategoryChange(e){
    if(e.target.value==="all"){
        this.LoadProducts("http://fakestoreapi.com/products")
    }else{
        this.LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
    }

}
render(){
    return(
        <div className='container-fluid'>
            <header className='bg-dark h2 text-white p-2 text-center mt-2'>Shopper</header>
            <section className='row'>
                <nav className='col-2'>
                <label className='form-label fw-bold'>Select Category</label>
                <div>
                    <select onChange={this.handleCategoryChange} className='form-select'>
                        {
                            this.state.categories.map(category=>
                                <option key={category} value={category}>{category.toUpperCase()}</option>
                            )
                        }

                    </select>
                </div>
                </nav>
                <main className='col-10 d-flex flex-wrap'>
                    
                    {
                            this.state.products.map(product=>
                                <div key={product.id} className='card p-2 m-2' style={{width:'200px'}}>
                                    <img src={product.image} className='card-img-top' height="140"/>
                                    <div className='card-header'>
                                        <p>{product.title}</p>
                                    </div>
                                </div>
                            )
                    }

                </main>
            </section>
        </div>
    )
}
}