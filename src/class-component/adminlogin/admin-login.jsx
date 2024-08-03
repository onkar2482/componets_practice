import React from 'react';

export class AdminLogin extends React.Component
{
    constructor(){
        super();
        this.state={
            title:"Product Details",
            product:{name:'tv',price:65000},
            category:["all","electronics"]
        }
}
render(){
    return(
        <React.Fragment>
           <div className='container-fluid'>
           <h2>{this.state.title}</h2>
            <dl>
                <dt>name</dt>
                <dd>{this.state.product.name}</dd>
                <dt>price</dt>
                <dd>{this.state.product.price}</dd>
                <dt>category</dt>
                <dd>
                    <select>
                        {this.state.category.map(categorys=>
                            <option key={categorys}>{categorys}</option>
                        )}
                    </select>
                </dd>
            </dl>
            <button>Login</button>
           </div>
        </React.Fragment>
    )
}
}