import React from "react";
import { useState, useEffect } from "react";

function Quote() {
   const [quote, setQuote] = useState("hello world");
  // const quotes = [
  //   {
  //     quote1: "life is better with a cat",
  //   },
  //   {
  //     quote2: "dont have conversation with idiot in the morning",
  //   },
  // ];
  // setQuote(function(){
  //   return(
  //     quotes[0]
  //   )
  // })
  useEffect(() => {
    const quotes = [
      {
        quote1: "life is better with a cat",
      },
      {
        quote2: "dont have conversation with idiot in the morning",
      },
    ];
    setQuote(quotes[0].quote1);
  }, []);
  return (
    <div className="flex justify-center h-full p-10  w-full bg-slate-700  ">
      <div className=" text-zinc-300"></div>
      <div className="text-zinc-300">{quote}</div>
    </div>
  );
}
export default Quote;
