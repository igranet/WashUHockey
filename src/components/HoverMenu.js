import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const HoverMenu = ({ menu, setHovered  }) => {

    console.log("called")
    return ( 
        
        <div 
        onMouseEnter={(()=>{setHovered(true)})} 
        onMouseLeave={(()=>{setHovered(false)})} 
        className=" mt-5 rounded-xl z-50 flex flex-col absolute left-52 top-4">
            <div className="flex flex-col rounded-xsm">
            {menu.map((item)=>{
                console.log("item", item)
                return (
                    <div className=" w-full rounded-sm bg-gray-200 px-9 cursor-pointer hover:bg-red-200" onClick={(()=>{window.location = item?.redirect})}>{item.name}</div>
                )
            })
           
            }
             </div>
        </div>
    )

}
export default HoverMenu;