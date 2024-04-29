import React from "react";
import { useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("    life is grim");
  // const quotes = [{
  //     quote1 :'life is better with a cat'
  // },{
  //     quote2 : 'dont have conversation with idiot in the morning'
  // }]s

  return (
    <div className="flex justify-center bg-slate-700 p-5 ">
      <div className=" text-slate-100">citation du jour :</div>
      <div>{quote}</div>
    </div>
  );
}
export default Quote;
