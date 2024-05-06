import React from "react";
import { useState, useEffect } from "react";

//chercher comment extraire des donnees json et le afficher en react
//faire le style
//mettre une boutons hidden en cas de besoins de switch

//esssayer de tout reliier a supabase

//et reveoyer des placeholders lors du clics des butons du dashbord

//comment faire le mode sombre en tailwind
//ou vais je mettre le boutton pour changer de theme

// function Quote() {
//   const [quote, setQuote] = useState("hello world");

  
  
//   return (
//     <div className="flex justify-center h-full p-10  w-full bg-slate-700  ">
//       <div className=" text-zinc-300"></div>
//       <div className="text-zinc-300">{quote}</div>
//     </div>
//   );
// }
// export default Quote;


// import React, { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("hello world");

  useEffect(() => {
    fetch(`learning.json`)
      .then((resp) => resp.json())
      .then((data) => {
        const allquotes = data;
        console.log(allquotes);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du JSON :", error);
      });
  }, []);

  return (
    <div className="flex justify-center h-full p-10 w-full bg-slate-700">
      <div className="text-zinc-300">{quote}</div>
    </div>
  );
}

export default Quote;
