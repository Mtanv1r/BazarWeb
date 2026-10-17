import React from 'react';

const PriceUp = async () => {
    // fetching data 
    const res=await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data=await res.json()
    console.log(data)
    
    return (
        <div>
            <h1><span>📈</span>দাম বেরেছে</h1>
            <div>
                
            </div>
        </div>
    );
};

export default PriceUp;