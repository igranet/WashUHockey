import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const RosterTag = ({ player  }) => {
    // const history = useHistory();
    console.log(player)
    let str = player.Headshot;
    let str2 = "https://drive.google.com/uc?export=view&id="
    str = str.substring(32, str.length - 17);
     
        let str3 = str2+str
        console.log(str3)
    return ( 
        <>
        <div className="text-white">
           <div className="flex">
                    <img src = {str3} className="w-1/5"></img> 
                    <div className="block my-auto">
                        <p className="text-black my-auto text-5xl">{player.First + " "}{player.Last}</p>
                        <p className="text-black "><span className="italic">Hometown:</span> {player.Hometown}</p>
                        <p className="text-black "><span className="italic">Position:</span> {player.Position}</p>
                        <p className="text-black "><span className="italic">Height:</span> {player.Height} <span className="italic">Weight:</span> {player.Weight} </p>
                    </div>
               </div> 
               <div className="w-1/3 h-2 border-b border-black mx-auto py-4"></div>
        </div>
     
  
        </>
    )

}
export default RosterTag;