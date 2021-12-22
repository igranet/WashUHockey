import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const FooterBar = ({ pic, text, link }) => {

    return ( 
        <footer className=" h-18 bg-gray-700 mt-24 border-t-2 border-black flex flex-col">
        <div className="pt-2 w-full text-center text-xl font-medium space-x-24 text-white cursor-pointer ">
            <span className="hover:text-red-400 duration-500">Contact.</span> 
            <span className="hover:text-red-400 duration-500">About.</span>
             <span className="hover:text-red-400 duration-500">Sponsor.</span></div>
        <div className="pt-4 text-center w-full text-gray-200 font-light align-text-bottom h-full my-auto">Copyright WashU Hockey 2022</div>
    </footer>
    
    )

}
export default FooterBar;
