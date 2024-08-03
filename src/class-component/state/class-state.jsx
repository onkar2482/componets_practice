import React from 'react';

export class State extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            products: []
        };
    }

    LoadCategory() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(categories => {
                this.setState({
                    categories: categories
                });
            });
    }

    LoadProduct() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(products => {
                this.setState({
                    products: products
                });
            });
    }

    componentDidMount() {
        this.LoadCategory();
        this.LoadProduct();
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <h2>Select category</h2>
                    <select>
                        {
                        this.state.categories.map(category =>
                            <option key={category}>{category}</option>
                        )}
                    </select>
                    <div className='mt-3'>
                        {this.state.products.map(product => (
                            <img key={product.id} src={product.image} width="100" height="100" className='mb-4' alt={product.title} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
