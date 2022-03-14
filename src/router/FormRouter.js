import React from "react"
import { Routes, Route } from "react-router-dom"
import Devoloper from "../activity/activity";
import Login from "../Form/Login"
import Signup_form from "../Form/Signup";
import Home from "../home/Home"

export default function MyRoutes(){
    return (
        <Routes>
        //     <Route path="/"element={<Signup_form />} />
        //     <Route path="/signIn" element={<Login/>} /> 
        //     <Route path="/home" element={<Home/>} />
            <Route path="/devoloper" element={<Devoloper/> }  />


         </Routes>
    )
} 