import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "./NavBar"
import StallLiu from "../assets/stallliu.png"
import SchedulePic from "../assets/schedulepic.png"
import ScheduleActual from "../assets/scheduleactual.png"
const TicketsPage = ({ match  }) => {

    return ( 
        <>
        <NavBar></NavBar>
        
    <div className="w-full h-screen flex flex-col">
        <div className="w-full h-2/3 bg-red-400 z-10">
            <div className="w-full h-5/6 z-10 absolute"> 
            <p className=" text-8xl text-white text-center mt-32 pb-4 border-white border-2">Schedule
            </p></div> 
           <div className="w-full h-1/2 absolute bg-opacity-70"> </div> 
            <img className="w-full h-full z-0 repeat"src={SchedulePic}></img>
           
    </div>
        <div className="width-full h-screen flex z-10">
       
            <div className="w-10/11 ml-8">
                <img className="w-2/3 mx-auto -mt-72" src={ScheduleActual}></img>
            </div>
                
        </div>
        <p className="text-center font-light">
                    Tickets are currently free for students and fans. Games are played at the Mills Ice Arena.
                </p>
    </div> 
    </>
    )
 
};

export default TicketsPage;
