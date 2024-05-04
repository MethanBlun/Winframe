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
    const quotes = [
      {
        quote1: "life is better with a cat",
      },
      {
        quote2: "dont have conversation with idiot in the morning",
      },
    ];
    setQuote(quotes[0].quote1);
    // const randomIndex = Math.floor(Math.random() * quotes.length);
    // setQuote(quotes[randomIndex]);
  }, []);
  return (
    <div className="flex justify-center h-full p-10  w-full bg-slate-700  ">
      <div className=" text-zinc-300"></div>
      <div className="text-zinc-300">{quote}</div>
    </div>
  );
}
export default Quote;




// import React, { useState, useEffect } from "react";

// function Quote(){
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     // Charger les citations à partir du fichier JSON
//     fetch("assets\quotes.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Une fois que les citations sont chargées avec succès, sélectionner une citation au hasard
//         const randomIndex = Math.floor(Math.random() * data.length);
//         const randomQuote = data[randomIndex].quote;
//         setQuote(randomQuote);
//       })
//       .catch((error) => {
      
//         console.error("Une erreur est survenue lors du chargement du fichier JSON :", error);
//       });
//   }, []); 

//   return (
//     <div className="flex justify-center h-full p-10 w-full bg-slate-700">
//       <div className="text-zinc-300">{quote}</div>
//     </div>
//   );
// }

// export default Quote;
