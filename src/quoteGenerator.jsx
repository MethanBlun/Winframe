
import React from "react";
import { useState } from "react";




function Quote(){
    const [quote,setQuote] = useState('life is grim')
    // const quotes = [{
    //     quote1 :'life is better with a cat'
    // },{
    //     quote2 : 'dont have conversation with idiot in the morning'
    // }]
   
    
    return (
        <div className="flex justify-center bg-red-100">{quote}</div>
    )

}
export default Quote;