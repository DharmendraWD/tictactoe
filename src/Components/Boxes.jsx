import React from 'react'
import { useState } from 'react'


function Boxes({boxesVal, updateBoxValue}) {

  




    return (
        <>      
        {
            boxesVal.map((e, i)=>{
                return(
                    <>
                    <div key={i} id={i} onClick={updateBoxValue} className="box text-[29px] flex justify-center items-center " style={{
                        borderRight: e.haveRborder === "yes" && "1px solid white",
                        borderBottom: e.haveBborder ==="yes" && "1px solid white"
                    }}><h1>{boxesVal[i].val}</h1> </div>
                    </>
                )
            })
        }



    </>
    )
}

export default Boxes