import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const HomePageBox = ({ pic, text, link }) => {
    const [hoverIng, setHovering] = useState(false)
    console.log("called")
    return ( 
        
     <div 
        onMouseEnter={(()=>{console.log("hovering" + hoverIng); setHovering(true)})}
        onMouseLeave={(()=>{setHovering(false)})}
        onClick={(()=>{window.location = link})}
        // onMouseOut={(()=>{console.log("no longer hovering");setHovering(false)})}
        className="rounded- h-1/3 flex 
        border-opacity-100 border-t-4 
        hover:border-gray-600 mt-20 hover:border-4 
        border-red-600 md:w-1/3 w-full md:ml-3 md:mr-3 mx-auto 
        relative z-10 duration-200 cursor-pointer duration-700">
            <img src={pic} className={hoverIng ? "rounded-b-sm relative opacity-40 duration-700": "rounded-b-sm relative opacity-90 duration-700"}></img>
    <div className="absolute flex w-full text-center">
    <p 
         onMouseEnter={(()=>{setHovering(true)})}
         className={`${hoverIng === true ? ` border-opacity-99 
         rounded-md
         bg-opacity-99
         border-gray-700 
         border-b-2 
         border-t-2
         border-l-2 
         border-r-2 
         text-xl 
         font-semibold 
         px-8
         py-2 
         mx-auto
         mt-20 
         h-1/4 bg-gray-600 text-red-600 duration-700
         `:
         
         `border-opacity-99 
         rounded-md
         bg-opacity-99
         border-red-900 
         border-b-2 
         border-t-2
         border-l-2 
         border-r-2 
         text-xl 
         font-semibold 
         px-8
         py-2 
         mx-auto
         mt-20 
         h-1/4 bg-red-600 text-gray-600 duration-700`}`}>
        {text}</p>
    </div>

    </div>      
    )

}
export default HomePageBox;
