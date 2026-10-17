
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

import React from 'react';

const Marquee = async  () => {

    // fetching data
    const res= await fetch("https://openapi.programming-hero.com/api/bazardor/products")

    const data = await res.json()
// console.log(data)



    return (
        <div className="bg-gray-300 text-black py-3">
              <MarqueeText duration={20}>
{data.map((elm,idx)=><span key={idx} >
                <span >  {elm.nameBn}
                    <span>{elm.image}</span>
                    <span>{elm.today}টাকা/কেজি</span>
                   <span>{elm.change.dir === "up" ? "📈" : "📉"}</span>
                      <span>{elm.change.pct.toLocaleString("bn-BD")}％</span>
                      
                </span>
                <span className="mx-5">👉</span>
            </span>)}
    </MarqueeText>
        </div>
    );
};

export default Marquee;