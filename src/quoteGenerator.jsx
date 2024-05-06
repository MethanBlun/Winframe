import React from "react";
import { useState, useEffect } from "react";

//chercher comment extraire des donnees json et le afficher en react
//faire le style
//mettre une boutons hidden en cas de besoins de switch

//esssayer de tout reliier a supabase

//et reveoyer des placeholders lors du clics des butons du dashbord

//comment faire le mode sombre en tailwind
//ou vais je mettre le boutton pour changer de theme

function Quote() {
  const [quote, setQuote] = useState("hello world");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./learning.json");
        const json = await response.json();
        setQuote(json[4].quote);
      } catch (error) {
        console.error("Erreur lors de la récupération des citations :", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="flex justify-center h-full p-10 w-full bg-slate-700">
      <div className="text-zinc-300">{quote}</div>
    </div>
  );
}

export default Quote;
