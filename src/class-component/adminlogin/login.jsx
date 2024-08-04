import React from 'react';
export class Login extends React.Component{
constructor(props){
    super();
}

render(){
    return(
        <React.Fragment>
            <div className='container-fluid'>
            <h2>{this.props.title}</h2>
            </div>
        </React.Fragment>
    )
}
}