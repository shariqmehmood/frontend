import React, { useState } from "react";
import img from "../acsert/user.png"
import "./form.css"

// import Navbar from "./navbar/navbar";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function Login() {

    let navigate = useNavigate()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cheakpassword, setcheakpassword] = useState("")

    const [namecolor, setnamecolor] = useState("");
    const [progree, setprogress] = useState("")





    const [errMsg, seterrMsg] = useState('Please Fill Form ');

    const [button, setbutton] = useState('inline');






    // const axios = require('axios');
    // let user = {
    //     Email: email,
    //     Password: password,
    // }

    // axios.post("http://localhost:3000/login", user)

    //     .then(function (response) {
    //         console.log(response.data.msg);
    //         setpassword("");
    //         setcheakpassword("");
    //         setemail("");

    //     })
    //     .catch(function (error) {
    //         console.log({error});
    //     });



    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setbutton("inline")
            seterrMsg("")
            setTimeout(() => {
                seterrMsg("")
                
            }, 5000)

        } else if (!regEx.test(email) && email !== "") {
            //   setemailErrMsg("Email is Not Valid");
            setbutton("none");
            seterrMsg("email is not valid");

            setTimeout(() => {
                
                seterrMsg("Please Fill Form ");
            }, 5000)

        }
    };



    const Loginme = () => {

        setTimeout(() => {
            setnamecolor("")
            seterrMsg('Please Fill Form ')
        }, 5000)


        if (email === "") {
            setnamecolor("red")
            seterrMsg("invalid email")
        }

        else if (password === "") {
            setnamecolor("red")

            seterrMsg("invalid pasword")
        }
        else if (cheakpassword === "") {
            setnamecolor("red")

            seterrMsg("invalid  password")
        }
        else if (password != cheakpassword) {
            setnamecolor("red")

            seterrMsg("wrong password")
        }
        else {




            const axios = require('axios');
            let user = {
                Email: email,
                Password: password,
            }

            axios.post("http://localhost:3000/login", user)

                .then(function (response) {
                    console.log(response.data.msg);
                   

                    // if(response.data.msg==="Email not found"){
                    //     seterrMsg("Email not found")
                    // }
                    // else if(response.data.msg==="incorrect password"){
                    //     seterrMsg("Wrong password")
                    // }
                    // else if(response.data.msg==="server err"){
                    //     seterrMsg("Try again later")

                    // }else{
                    //     seterrMsg("")
                    // }
                    // console.log(response.data.msg,"++++")


                    setprogress('ok')
                        
                            
                            
                    setTimeout(() => {
                        
                        setpassword("");
                        setcheakpassword("");
                        setemail("");
                        setprogress("");
                        navigate('/home')
                        
                    }, 5000)

                })
                .catch(function (error) {

                    if (error?.response?.data?.msg === "Email not found") {
                        seterrMsg("Email not found")
                        setnamecolor("red")
                    }
                    else if (error?.response?.data?.msg === "incorrect password") {
                        seterrMsg("incorrect password")
                        setnamecolor("red")

                    }
                    else if (error?.response?.data?.msg === "server err") {
                        setnamecolor("red")
                        seterrMsg("Try again later")

                    } else {
                        setnamecolor("")
                        seterrMsg("")
                    }


                    console.log({ error });
                });

        }


        // navigate('/signIn')

    }


    return (<>
        {/* <Navbar/> */}
        <div className="loginbody1">
            <div className="center">
                <img className="img" src={img} alt="user"></img>
                {errMsg ? <h2 className="massage" style={{ color: namecolor }}>{errMsg}</h2> : null}


                <h1> Login Form</h1>
                <div className="form">

                    <div className="txt">
                        <input value={email} placeholder="Email" onChange={(ev) => { setemail(ev.target.value) }} type="email" required />
                        <span></span>
                        {/* <label for="Username" >E-mail</label> */}
                    </div>
                    <div>
                        {/* {emailerrMsg ? <p style={{ color: namecolor, marginTop: "0px" }}>{emailerrMsg}</p> : null} */}

                    </div>

                    <div className="txt">
                        <input value={password} placeholder="Password" onClick={emailValidation} onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
                        <span></span>
                        {/* <label for="Password">Password</label> */}
                    </div>
                    <div>
                        {/* {passworderrMsg ? <p style={{ color: namecolor, marginTop: "0px" }}>{passworderrMsg}</p> : null} */}

                    </div>
                    <div className="txt">
                        <input value={cheakpassword} placeholder="Re-Enter-Password" onChange={(ev) => { setcheakpassword(ev.target.value) }} type="password" required />
                        <span></span>
                        {/* <label for="Password">Re-Enter-Password</label> */}
                    </div>
                    <div>
                        {/* {cheakpasserrMsg ? <p style={{ color: namecolor, marginTop: "0px" }}>{cheakpasserrMsg}</p> : null} */}

                    </div>
                    {progree==="" ?
    <button className="submit" style={{ display: button }} onClick={Loginme}> Login</button>
    :<center><CircularProgress className="progresive" /></center>}

                </div>


            </div>
        </div>
    </>
    )
}




























