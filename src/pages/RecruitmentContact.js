import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "./NavBar"
import FooterBar from "../components/footerBar";
import RecruitForm from "../components/RecruitForm";
import SobelImage from "../assets/sobelsobel.png"
import LockerPic from "../assets/wulockerroom.png"
const RecruitContact = ({ match  }) => {
const buttStyle = "bg-red-400 px-4 py-4 text-white text-center mt-4 w-full rounded-lg hover:bg-red-600 duration-400"
    return ( 
        <>
        <NavBar></NavBar>
        
    <div className="w-full overflow-scroll">
        <div className="md:w-1/2 w-2/3 mx-auto -mb-12"><p className="mt-24 text-2xl md:text-6xl font-medium">Recruitment.</p>
        <p>As a team we are committed to bringing in athletes who are not only 
            at the top of their competitive game, but also are among the best 
            students in the nation. Playing at Washington University offers an 
            incredible hockey experience in conjunction with a world class (Top 15. in the US) 
            education. Our new locker room (pictured) <img className="w-72 rounded-lg mx-auto" src={LockerPic}></img> is state of the art and our program is 
            only continuing to grow! Fill out the form below to get in touch with us!</p></div>
        <div className="flex">
        <div className="z-10 md:bg-opacity-0 bg-gray-200 rounded-md md:px-0 px-2 bg-opacity-70 md:ml-72 ml-12 md:w-1/3 w-3/4 mt-24 text-4xl text-center font-semibold overflow-scroll flex flex-rows">
           <RecruitForm>

           </RecruitForm>
        </div>
        <img src={SobelImage} className="w-2/3 md:h-full h-full z-0 absolute -right-2 md:-right-2"></img>
        </div>
        
    </div> 
    {/* <FooterBar></FooterBar> */}
    <footer className=" h-18 bg-gray-700 mt-24 border-t-2 border-black flex flex-col absolute w-full">
               <div className="pt-2 w-full text-center text-xl font-medium md:space-x-24 space-x-12 text-white cursor-pointer ">
                   <span className="hover:text-red-400 duration-500" onClick={(()=>{window.location = "/contact"})}>Contact.</span> 
                   <span className="hover:text-red-400 duration-500" onClick={(()=>{window.location = "/about"})}>About.</span>
                    <span className="hover:text-red-400 duration-500">Sponsor.</span></div>
               <div className="pt-4 text-center w-full text-gray-200 font-light align-text-bottom h-full my-auto">Copyright WashU Hockey 2022</div>
    </footer>
    </>
    )
 
};

export default RecruitContact;
