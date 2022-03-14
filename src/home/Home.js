// import React from 'react';
// import "./home.css"
// // import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import car2 from "../acsert/car.jpg"
// import logout from "../acsert/log.webp"
// import home from "../acsert/home.gif"
// import car from "../acsert/cars.jpg"
// import Devoloper from '../activity/activity';
// export default function Home() {
//   const navigate = useNavigate();
//   return (
//     <>


//       <div className="navbar">
//         <a className="logo" href="#"> ShariqMehmood</a>
//         <ul className="nav">

//           <li><a href="#">Home</a></li>
//           {/* <li><a href="#portfolio">Portfolio</a></li> */}
//           <li><a href="#services">Service</a></li>

//           <li><a href='#devoloper' >Our_Team</a></li>
//         </ul>
//         <img className='logout_img' onClick={() => { navigate('/signIn') }} src={logout}></img>
//       </div>

//       <br />
//       <br />
//       <div>
//         <img src={home} className="backbround" alt="background"></img>
//       </div>


//       <section className="about-area" id="about">
//         <div className="text-part">
//           <h1 className='heading'> 
//             About Me!</h1>
//           <div>
//             <div className='about'>

//               <div className='textabout'>
//                 <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods</p>
//               </div>
//               <div className='aboutimg'>
//                 <img alt='car' className='carimg' src={car}></img>
//                 <img alt='car' className='carimg1' src={car2}></img>


//               </div>
//             </div>


//           </div>

//         </div>
//       </section>



//       <section className="service-area" id="devoloper">
//         <div className="text-part">
//           <h1 className='heading'>
//             Our Team!</h1>
//           <div>
//             <Devoloper/>




//           </div>
//         </div>
//       </section>
//       {/* <section className="port-area" id="services">
//   <div className="text-part">
//   <h1>
//       services Area</h1>
//       <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
//       </div>
//     </section> */}

//       <section className="contact-area">
//         <div className="text-part">
//           <h1>
//             ShariqMehmood</h1>
//           <p>
//             I am ShariqMehmood Mern Stack Devoloper;<br />
//             {/* @copyRight : ShariqMehmood : 2020; */}
//           </p>
//         </div>
//       </section>

//     </>


//   )



// }

import React ,{useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import "./home.css"
import facebook from "../acsert/facebook.jpg"
import whatsapp from "../acsert/w.PNG"
import insta from "../acsert/insta.jpg"
import twiter from "../acsert/twiter.jpg"
import { useNavigate } from "react-router-dom";




export default function Home() {
  const navigate = useNavigate();
  const [email, setemail] = useState("")


  return (
    <div>
      <>
        <Navbar className="navbar" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Features</Nav.Link>
              <Nav.Link onClick={() => { navigate('/signIn') }}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div className="home">
        <div className="textdiv">
          <h1 className="heading">Make Your <br />Marketing Real</h1>
      <div style={{width:"90%"}}>

          <h3>Create better websites with mobile-responsive templates, seamless drag & drop and unlimited customization.</h3>
         </div>
          <button className="button">Start</button>
        </div>


      </div>
<br/>
<br/>

      
      <>
<div>
  <h1 className="heading1"> Choose your Plan</h1>
  <h3 className="text">The Website You Find .<br/>Started To Build Your Own WEbsite</h3>
  <div className="Cards">
    {/* ////////// */}
    <div className="card"> 
      <h1 className="cardh1">SHARED HOSTING</h1>


      <div style={{width:"90%"}}>
      <h4 className="cardh4">High Performence Website For Your Business</h4>

      </div>
      <h5 className="cardh5">
        Start at
      </h5>
      <h1 className="cardprice">RS 100/mounth</h1>
      <button className="cardbutton">Buy Now</button>
{/* /////////// */}
    </div>
    <div className="card"> 
      <h1 className="cardh1">MANAGE HOSTING</h1>
      <div style={{width:"90%"}}>

      <h4 className="cardh4">High Performence Website For Your Business</h4>
      </div>
      <h5 className="cardh5">
        Start at
      </h5>
      <h1 className="cardprice">RS 200/mounth</h1>
      <button className="cardbutton">Buy Now</button>

    </div>
    {/* //////// */}
    <div className="card"> 
      <h1 className="cardh1">VIRTUAL HOSTING</h1>
      <h4 className="cardh4">High Performence Website For Your Business</h4>
      <h5 className="cardh5">
        Start at
      </h5>
      <h1 className="cardprice">RS 500/mounth</h1>
      <button className="cardbutton">Buy Now</button>

    </div>
    {/* //// */}
    <div className="card"> 
      <h1 className="cardh1">YOUR.OWN SERVER</h1>
      <div style={{width:"90%"}}>
      <h4 className="cardh4">High Performence Website For Your Business</h4>
      </div>
      <h5 className="cardh5">
        Start at
      </h5>
      <h1 className="cardprice">RS 1000/mounth</h1>
      <button className="cardbutton">Buy Now</button>

    </div>

  </div>
</div>


      </>
<br/>

      <div className="bottom">
        <div className="botom_div">
          <h1  className="bottom_heading">Find Your Domain Name</h1>
          <h3 className="bottom_text">And contact_Us Rapidly</h3>
          <div className="input_div">
            <input className="input" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Write Domain" />
            <button className="bottom_btn" onClick={()=>{console.log(email);setemail("")}}>Send</button>
          </div>
            <div className="icondiv">
              <img alt="icon" className="icon" src={facebook} />
              <img alt="icon" className="icon"  src={insta} />
              <img alt="icon" className="icon"  src={ twiter} />
              <img alt="icon" className="icon"  src={whatsapp} />
              


            </div>

        </div>

      </div>

    </div>

  )
}







