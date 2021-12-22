import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "./NavBar"
import FooterBar from "../components/footerBar";
import SupportBar from "../components/supportBar";

const ContactPage = ({ match  }) => {
const buttStyle = "bg-red-400 px-4 py-4 text-white text-center mt-4 w-full rounded-lg hover:bg-red-600 duration-400"
    return ( 
        <>
        <NavBar></NavBar>
        
    <div className="w-full flex">
        <div className="mx-auto w-1/3 mt-24 text-4xl text-center font-semibold">
            <p>Need to get in touch? <br></br>Select an option below!</p>
            <div className="w-2/3 flex flex-col mx-auto text-center mt-12">
                <button className={buttStyle} onClick={(()=>{window.location = "/contact/recruitment"})}>Recruiting</button>
                {/* <button className={buttStyle}>Sponsorship</button> */}
                <button className={buttStyle} onClick={(()=>{window.location = "/contact/other"})}>Other Contact</button>
            </div>
        </div>
        
    </div> 
    <SupportBar className="mb-24"></SupportBar>
    {/* <FooterBar></FooterBar> */}
    <footer className=" h-18 bg-gray-700 mt-24 border-t-2 border-black flex flex-col bottom-0 absolute w-full">
               <div className="pt-2 w-full text-center text-xl font-medium space-x-24 text-white cursor-pointer ">
                   <span className="hover:text-red-400 duration-500" onClick={(()=>{window.location = "/contact/"})}>Contact.</span> 
                   <span className="hover:text-red-400 duration-500" onClick={(()=>{window.location = "/about"})}>About.</span>
                    <span className="hover:text-red-400 duration-500">Sponsor.</span></div>
               <div className="pt-4 text-center w-full text-gray-200 font-light align-text-bottom h-full my-auto">Copyright WashU Hockey 2022</div>
           </footer>
    </>
    )
 
};

export default ContactPage;
