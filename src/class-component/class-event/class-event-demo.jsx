import React from 'react';
export class ClassEventDemo extends React.Component
{
  constructor(){
    super();
    this.state={
        msg:""
    }
    

  }
  InsertClick(){
    this.setState({
        msg:"record insert"
    })
  }

  render(){
    return(
        <div className='container-fluid'>
            <button onClick={()=>this.InsertClick()}>Insert</button>
            <p>{this.state.msg}</p>
        </div>
    )
  }
}