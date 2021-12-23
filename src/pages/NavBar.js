import React, { useState, useEffect } from "react";
import teamPic from "../assets/teampic.jpg"
import bearLogo from "../assets/bearLogo.png"
import NavOption from "./navOptions";
import { useHistory } from "react-router";
const NavBar = ({ match  }) => {
        let pages = [
        {title:'Home', redirect:"/"},
        {title:'About', redirect:"/about"}, 
        {title:'Team', redirect:"/roster"}, 
        {title:'Contact', redirect:"/contact"},
        {title:'Donate', redirect:"/donate"}
        
    ]

    return ( 
        <>
    <div className="fixed w-full bg-white border-b-2 border-gray-200 h-16 z-20">
        <div className="flex">
       <div className="md:flex md:visible invisble md:w-full my-auto">
            <img src={bearLogo} className="md:visible invisible w-16 h-16 ml-8"></img>
             <p className="md:visible invisible text-3xl mt-4 font-bold text-red-600">Bears Hockey</p>
           
        </div> 
           <div className="mt-2 text-center md:relative absolute my-auto md:mr-8 mr-3 md:flex flex mx-auto" >
                    {
                        pages.map((item)=>{
                            return <NavOption text={item}></NavOption>
                        })
                    }


           </div>
           </div>
    </div>
        </>
    )

}
export default NavBar;