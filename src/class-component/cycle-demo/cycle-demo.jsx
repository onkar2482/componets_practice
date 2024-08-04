import React from "react";

export class  Cycle extends React.Component{
constructor(){
    super()
}

componentDidMount(){
  alert("Login Mount Successfully")
}

componentWillUnmount(){
    alert("Login component will unmute")
}
render(){
    return(
        <div>
            <h3>Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="User"></input>
                </dd>
            </dl>
        </div> 
    )
}

}



export class Register extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h3>Register</h3>
            </div> 
        )
    }
    
    }


    
export class CycleDemo extends React.Component{
    constructor(){
        super()
      this.state={
        component:""
      }
    }
    LoginClick(){
        this.setState({
            component:<Cycle />
        })

    }

    RegisterClick(){
        this.setState({
            component:<Register/>
        })

    }


    render(){
        return(
            <div className="container-fluid">
                <div className="mt-3">
            <button onClick={this.LoginClick.bind(this)} className="btn btn-primary me-2">Login</button><button onClick={this.RegisterClick.bind(this)} className="btn btn-danger ms-1">Register</button>
            </div>
            <div className="mt-4">
                {this.state.component}
            </div>
            </div> 
        )
    }
    
    }