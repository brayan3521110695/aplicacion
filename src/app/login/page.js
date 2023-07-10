"use client"
import React from "react"
import "./login.css"
import {login} from  "../../services/firebase/auth";

export default function login() {
    
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

function onlogin() {
    //const enmail = state.email;
    //const password = state.password;

    const {email, password} = state;

    login (email, password);
}
    return (
        <div classname="container">
           <input name="email" onChange={onCnhange} value= {state.email} placeholder="email"type="text" />
           
            <input value={state.password}placeholder="123456"  type="password" />
           
            <button>login</button>
        </div>
    )
}