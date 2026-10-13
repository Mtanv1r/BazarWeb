import React from 'react';

const Marquee = async  () => {

    // fetching data
    const res= await fetch("https://openapi.programming-hero.com/api/bazardor/products")

    const data = await res.json()




    return (
        <div>
            {data.slice(0,10).map((elm,idx)=>{
                return(
                    <>
                    <div  className="flex items-center justify-evenly">
                        <h1 key={idx}>{elm.nameBn}</h1>
   <h1 key={idx}>{elm.today}</h1>
                    </div>

   
                    </>
                  
                   
                )
            })}
        </div>
    );
};

export default Marquee;