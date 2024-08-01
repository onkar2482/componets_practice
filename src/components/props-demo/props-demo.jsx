import { UserLogin } from "../../componets-libary/userlogin"
export function ProsDemo(){
return(
    <div className="container-fluid">
        <h2>Shooping Home</h2>
        <UserLogin buttontype="btn btn-light" Theme="w-25 bg-primary text-white p-2" Title="User Login" UserLable="Your Email" UserType="email" Verify="Confirmation Code" VerifyType="number"/>
        <hr></hr>
        <UserLogin  buttontype="btn btn-warning" Theme="w-25 bg-dark text-white p-2" Title="admin login" UserLable="Mobile" UserType="text" Verify="Your Otp" VerifyType="date"/>
    </div>
)
}