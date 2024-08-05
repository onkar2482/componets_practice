import { TextField } from "@mui/material";
import { useState } from "react";

export function MaterialDemo(){
    const[username,setusername]=useState('')
    
    function handleNameChage(e){
        setusername(e.target.value)
    }
    return(
        <div className="container-fluid">
            <div className="w-25">
                <h3>Bootstrap Style</h3>
                <label>User Name</label>
                <div>
                <input type="text" className="form-control w-50"  placeholder="Enter your name"/>
                </div>
            </div>
            <div className="w-25">
                <h3>React MUI</h3>
                <TextField color="success" onChange={handleNameChage}  label="User Name" variant="outlined"></TextField>
                   
            </div>
            <p>hello{username}</p>
        </div>
    )
}