"use client"
import React from "react"
import {singup} from  "../../services/firebase/auth";
import "./register.css"

 function register() {
    
  const  [state,setState] = React.useState({ 
    email: "",
    password: ""
});

function onChange(event)  {
const value = event.target.value;
    const name = event.target.name;
    setState({
        ...state,
        [name]: value
    })

}

function onregister() {
    const {email, password} = state;
    singup (email, password)
}
    return (
        <div classname="container">
           <input  onChange={onCnhange} name="email" type="text"value= {state.email}  /> placeholder="email"
           <input  onChange={onCnhange} name="password" type="password"value= {state.email}  /> placeholder="password"
            <button onClick={onregister}>registrarse</button>
        </div>
    )
}


export default register;