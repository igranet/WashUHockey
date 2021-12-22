import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import HoverMenu from "../components/HoverMenu";

const NavOption = ({ text  }) => {
  const menu =[
      {name:"Facilities", 
      redirect:"/facilities"},
    {name:"Schedule",
      redirect:"/schedule"},
      {name:"Roster",
    redirect:"/roster"},
    {name:"Coaches",
  redirect:"/coaches"}
  ]
  const [isHovered, setHovered] = useState(false)

// const history = useHistory();
if (text.redirect !== "/roster") {
  console.log("not about")
  return ( 
    <>
    
  <button 
  className="md:py-2 bg-red-500 mx-1 text-sm cursor-pointer hover:bg-red-800 md:px-8 px-2 text-white duration-200 rounded-sm" 
  
  onClick={(()=>{window.location = text?.redirect})}>{text?.title}
  
  </button>

    </>
)
} else {
  
  return ( 
    <>
      <div onMouseLeave={(()=>{setHovered(false)})} onMouseEnter={(()=>{setHovered(true)})}>
      <button 
      className="py-2 bg-red-500 mx-1 text-sm cursor-pointer hover:bg-red-800 px-8 text-white duration-200 rounded-sm" 
      onClick={(()=>{window.location = text?.redirect})}>{text?.title}
      </button>
      {isHovered ? (<HoverMenu menu = {menu} setHovered = {setHovered}></HoverMenu>):null}
      </div>
 
    </>
)
}
   

}
export default NavOption;