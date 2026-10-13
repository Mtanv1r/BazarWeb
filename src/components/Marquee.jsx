
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

import React from 'react';

const Marquee = async  () => {

    // fetching data
    const res= await fetch("https://openapi.programming-hero.com/api/bazardor/products")

    const data = await res.json()




    return (
        <div>
              <MarqueeText duration={20}>
{data.map((elm,idx)=><span key={idx}>
                <span>  {elm.nameBn}</span>
                <span>✦</span>
            </span>)}
    </MarqueeText>
        </div>
    );
};

export default Marquee;