export function UserLogin(props){
    return(
        <div className="container-fluid">
           
                <dl className={props.Theme}>
                <h3>{props.Title}</h3>
                   <dt>{props.UserLable}</dt>
                   <dd><input type={props.userType} className="form-control" /></dd>
                   <dt>{props.Verify}</dt>
                   <dd><input type={props.VerifyType} className="form-control" /></dd>
                   <button className={props.buttontype}>Login</button>
                </dl>
                
            
        </div>
    )
}