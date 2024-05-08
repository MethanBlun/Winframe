import React from "react";
import { useState, useEffect } from "react";



function Quote() {
  const [quote, setQuote] = useState("default citation");
  const [author, setAutor] = useState("No one");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./learning.json");
        const json = await response.json();
        const rnd = Math.floor(Math.random() * json.length);
        setQuote(json[rnd].quote);
        setAutor(json[rnd].author);
        console.log(quote, author);
      } catch (error) {
        console.error("Erreur lors de la récupération des citations :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" flex-auto  bg-slate-800">
        <div className=" h-full  text-gray-50 ">{quote}</div>
        <div className=" text-white">{author}</div>

      </div>
    </>
  );
}

export default Quote;
