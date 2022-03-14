import React, { useState } from "react";
import user from "../acsert/user.png";
import axios from "axios";
import "./form.css"
// import Navbar from "./navbar/navbar";
import { useNavigate } from "react-router-dom";
// import 'antd/dist/antd.css';
// import './index.css';
// import { Modal, Button } from 'antd';
import { CircularProgress } from "@mui/material";
// import {CircularProgressWithLabel} from "@mui/material";






export default function Signup_form() {





    let navigate = useNavigate()

    const [progree, setprogress] = useState("")
    const [Name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [Number, setnumber] = useState("");
    const [namecolor, setnamecolor] = useState("");
    const [nameerrMsg, setnameErrMsg] = useState('Please Fill Form ');
    const [button, setbutton] = useState('inline');



    
    
    const axios = require('axios');
    setTimeout(() => {
        setnamecolor("")
        setnameErrMsg('Please Fill Form ');

    }, 4000)

    //   ////////////////////


    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setbutton("inline")
            setnameErrMsg("")
        } else if (!regEx.test(email) && email !== "") {
            //   setemailErrMsg("Email is Not Valid");
            setbutton("none");
            setnameErrMsg("email is not valid")
        }
    };






    const regesterme = async () => {


        if (Name === "") {
            setnamecolor("red")
            setnameErrMsg("Invalid Name")
        }
        else if (email === "") {
            setnamecolor("red")

            setnameErrMsg("invalid email")
        }


        else if (Number === "") {
            setnamecolor("red")

            setnameErrMsg("invalid number")
        }
        else if (password === "") {
            setnamecolor("red")
            setnameErrMsg("invalid pasword")
        }

        else {


            // let data={
            //     name:Name,
            //     Number:Number,
            //     Email:email,
            //     password:password,
            //     cheakpassword:cheakpassword,
            // }
            // console.log(data);

            setTimeout(() => {
                setnameErrMsg('');
                // setpasswordErrMsg('');
                // setcheakpassErrMsg('');
                // setnumberErrMsg('');
                // setemailErrMsg('');
            }, 5000)

            let user = {
                Name: Name,
                Email: email,
                Password: password,
                Number: Number,
            }

            axios.post("http://localhost:3000/Signup", user)

                .then((res) => {
                    console.log(res.data.msg, 'response');

                    if (res.data.msg === "email is alredy in Use") {
                        setnameErrMsg("email is found");
                        setnamecolor("red")
                    }
                    else {


                        setprogress('ok')



                        setTimeout(() => {

                            setname("");
                            setpassword("");
                            setnumber("");
                            setemail("");
                            navigate('/signIn');
                            setprogress("");

                        }, 5000)
                    }


                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }


    return (<>
        <div className="body">
            <div className="center">
                <img className="img" src={user}></img>

                {nameerrMsg ? <h2 className="massage" style={{ color: namecolor }}>{nameerrMsg}</h2> : null}
                <h1>Signup form</h1>

                <div className="form">
                    <div className="txt">
                        <input value={Name} placeholder="Name" onChange={(ev) => { setname(ev.target.value) }} type="text" required />
                        <span></span>

                    </div>
                    <div>

                    </div>
                    <div className="txt">
                        <input value={email} placeholder="E-mail" onChange={(ev) => { setemail(ev.target.value) }} type="text" required />
                        <span></span>
                    </div>
                    <div>
                        {/* {emailerrMsg ? <p style={{ color: namecolor, marginTop: "0px" }}>{emailerrMsg}</p> : null} */}

                    </div>
                    <div className="txt">
                        <input value={Number} placeholder="Number" onClick={emailValidation} onChange={(ev) => { setnumber(ev.target.value) }} type="number" required />
                        <span></span>
                    </div>
                    <div>
                        {/* {numbererrMsg ? <p style={{ color: namecolor, marginTop: "0px" }}>{numbererrMsg}</p> : null} */}

                    </div>
                    <div className="txt">
                        <input value={password} placeholder="Password" onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
                        <span></span>
                    </div>
                    <div>

                    </div>
                   
                    </div> 
                    {progree === "" ?
                        <button className="submit" style={{ display: button }} onClick={regesterme}> Submit</button>
                        : <center><CircularProgress  /></center>}



                </div>

                    <button className="gotologin" onClick={() => {navigate('/signIn')}}> Login</button>
                </div>
                <div>


            </div>
    </>
    )
}














