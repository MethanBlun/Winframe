import React from "react";
import { useState, useEffect } from "react";


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
        const rnd = Math.floor(Math.random() * json.length)
        setQuote(json[rnd].author);
        console.log(quote)
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




// fetch('quotes.json')
//   .then(response => response.json())
//   .then(data => {
//     // Une fois que le fichier est chargé avec succès, vous pouvez utiliser son contenu
//     var citations = data;

//     // Fonction pour afficher une citation et son auteur au hasard
//     function afficherCitationAuHasard() {
//         // Sélectionner une citation au hasard
//         var citation = citations[Math.floor(Math.random() * citations.length)];
//         // Afficher la citation et son auteur
//         console.log('Citation: ' + citation.quote);
//         console.log('Auteur: ' + citation.author);
//     }

//     // Appel de la fonction pour afficher une citation au hasard
//     afficherCitationAuHasard();
//   })
//   .catch(error => {
//     // En cas d'erreur lors du chargement du fichier JSON
//     console.error('Une erreur est survenue lors du chargement du fichier JSON :', error);
//   });






export default Quote;
