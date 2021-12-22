import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import SnarfsLogo from "../assets/snarfslogo.png" 
import GlobalBrew from "../assets/globalbrew.png"
import SugarFire from "../assets/sugarfire.png"
const SupportBar = ({   }) => {
    // const history = useHistory();
    
    return ( 
        <>
        <div className="w-full border-black border-t-2 mt-24 border-b-2 mb-24">
        <div className="w-full border-red-600 border-t-2 border-b-2">
        <div className="w-full bg-red-500 bg-opacity-95 h-2/3 border-gray-300 border-t-2 flex flex-row py-12 border-b-2">
            <div className="px-24 w-1/2">
                <p className="font-light text-gray-200 text-xl font-family:arial bg-gray-800 bg-opacity-20 rounded-lg px-4"> 
                Our team is made possible by these sponsors. Find out how to support us!</p>
            </div>
            <div className="mx-auto flex h-1/6 w-1/2">
                <img className="w-1/6 mx-auto" src={SnarfsLogo}></img><img className="w-1/6 mx-auto" src={SugarFire}></img><img className="w-1/6 mx-auto" src={GlobalBrew}></img>
            </div>
        </div>
        </div>
        </div>
       
     
  
        </>
    )

}
export default SupportBar;


