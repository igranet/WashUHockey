import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "./NavBar"
import StallLiu from "../assets/stallliu.png"
import LockerMain from "../assets/lockermain.png"
import WuRoom from "../assets/wulockerroom.png"
import Cut from "../assets/cut.jpeg"
import CrowdPic from "../assets/arenass.png"
const FacilitiesPage = ({ match  }) => {

    return ( 
        <>
        <NavBar></NavBar>
        
    <div className="w-full h-screen">
        <div className="w-full h-3/4 bg-red-400 z-10">
            <div className="w-full h-5/6 z-10 absolute"> 
            <p className=" text-8xl text-white text-center mt-48 pb-4 border-white border-2">Facilities
            </p></div> 
           <div className="w-full h-1/2 absolute bg-opacity-70"> </div> 
            <img className="w-full h-full z-0"src={WuRoom}></img>
           
    </div>
        <div className="width-full h-screen flex z-10">
       
            <div className="w-3/4 mx-auto">
                <p className="text-black font-bold text-5xl z-10">About.</p>
                    <p>Currently, the Washington University Ice Hockey team plays at the Mills Ice Arena, former home of the St. Louis Blues.</p>
                    <p> The space, renovated in 2021, includes team locker room, dry locker room, Coaches Offices, weight room, and athletic trainer room</p>
                    <br></br>
                    <br></br>
                    <p className="w-3/4 text-center text-black font-bold text-3xl mx-auto">Amneties.</p>
                    <p className="w-3/4 mx-auto text-center"> Thanks to our generous sponsors GlobalBrew and SugarFire, the team has an assortment of sock tape, stick tape, gatorades, drinks, towels, and a number of other amneties that allow players to focus solely on improving their game </p>
                    <div className="w-2/3 mx-auto flex flex-rows">           
                        <img alt="The Washington University St. Louis (WashU Hockey) locker room" className="w-1/3" src={StallLiu}></img> <img src={WuRoom} className="w-2/3"></img>

                    </div>
                    <div className="w-2/3 mx-auto flex flex-col">
                        <img src={Cut} className="w-5/6"></img><img src={CrowdPic} className="w-5/6"></img>
                    </div>
            </div>
                
        </div>
        
    </div> 
    </>
    )
 
};

export default FacilitiesPage;
