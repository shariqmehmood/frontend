import React , { useEffect, useState } from "react";
import "./activity.css"
import areeb from "../acsert/arrreb.png"
import shariq from "../acsert/s.png"
import zeeshan from "../acsert/z.png"




let quiz1 = [
    
    
  

    {
   
  
        img: shariq,
        option1: 'Shariq Mehmood',
        option2: 'Mern Stack Dev',
     
    },
    {
   
 
      img: zeeshan,
      option1: 'Zeeshan Ahmed',
      option2: 'Mern Stack Dev',
   
  },
    {
  
     
        img: areeb,
        option1: 'Muhammad Areeb',
        option2: 'Mern Stack Dev',
    
    },
  
  
    
    ]
    
let quiz2 = [
    
    {
  
     
        img: areeb,
        option1: 'Muhamad Areeb',
        option2: 'Mern Stack Dev',
    
    },
    {
   
  
        img: shariq,
        option1: 'Shariq Mehmood',
        option2: 'Mern Stack Dev',
     
    },
    {
     
   
        img: zeeshan,
        option1: 'Zeeshan Ahmed',
        option2: 'Mern Stack Devt',
     
    },

    
    
    
    ]
    let quiz3 = [
        {
         
       
            img: zeeshan,
            option1: 'Zeeshan Ahmed',
            option2: 'Mern Stack Dev',
         
        },
        {
      
         
            img: areeb,
            option1: 'Muhammad Areeb',
            option2: 'Mern Stack Dev',
        
        },
        
    
        {
       
      
            img: shariq,
            option1: 'Shariq Mehmood',
            option2: 'Mern Stack Dev',
         
        },
        
        
        
        ]
    export default function Devoloper (){
        // /////for 1st
        let [currentIndex1, setcurrentIndex1] = useState(0);
        let [currentIndex2, setcurrentIndex2] = useState(0);
        let [currentIndex3, setcurrentIndex3] = useState(0);

        setTimeout(() => {
            addprogeres1()
        }, 5000)
        let addprogeres1=()=>{
            if(currentIndex1 === 2){
                setcurrentIndex1(0)
                // console.log("helo")
            }
            else(
                setcurrentIndex1(currentIndex1 + 1)
            )
        }
        const currentQuiz1 = quiz1[currentIndex1]
        ///////for 2nd 
        setTimeout(() => {
            addprogeres2()
        }, 5000)
        let addprogeres2=()=>{
            if(currentIndex2 === 2){
                setcurrentIndex2(0)
                // console.log("helo")
            }
            else(
                setcurrentIndex2(currentIndex2 + 1)
            )
        }
        const currentQuiz2 = quiz2[currentIndex2]

        // ///for 3
        setTimeout(() => {
            addprogeres3()
        }, 5000)
        let addprogeres3=()=>{
            if(currentIndex3 === 2){
                setcurrentIndex3(0)
                // console.log("helo")
            }
            else(
                setcurrentIndex3(currentIndex3+1)
            )
        }
        const currentQuiz3= quiz3[currentIndex3]

        
        
        


        return(
            <div>
             <div>
              

    {/* <h1>shariqmehmood</h1> */}
    <div className="fullDiv">

    <div className="div1">
        <div className="imgdiv">

       <img alt="img" className="img1" src={currentQuiz1?.img}></img>
        </div>
        <h5 >  {currentQuiz1?.option1}</h5>
        <h5 >  {currentQuiz1?.option2}</h5>
    </div>
    <div className="div2">
    <div className="imgdiv">
    <img alt="img" className="img2" src={currentQuiz2?.img}></img>
        </div>
        <h1 >  {currentQuiz2?.option1}</h1>
        <h5 >  {currentQuiz2?.option2}</h5>
    </div>  
    <div className="div3">
        <div className="imgdiv">
    <img alt="img" className="img2" src={currentQuiz3?.img}></img>
            </div>
        <h5 >  {currentQuiz3?.option1}</h5>
        <h5 >  {currentQuiz3?.option2}</h5>
    </div>
    </div>
    </div>
        </div>
                
    )
    }
      
  