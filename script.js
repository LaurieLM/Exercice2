// DOM Elements
const bodyElement = document.querySelector("body");

async function fetchOffers() {
  let loadingMessage = "Loading...";
  const loadingElement = document.createElement("p");
  loadingElement.textContent = loadingMessage;
  bodyElement.appendChild(loadingElement);
  try {
    //Récupère les données de l'url (API) et les transforme en JSON
    const response = await fetch("https://thesimpsonsapi.com/api/characters");
    const characters = await response.json();

    // Affiche les données dans le DOM
    characters.results.forEach((character) => {
      const newH2Element = document.createElement("h2");
      newH2Element.textContent = `Nom : ${character.name}`;
      const newP = document.createElement("p");
      newP.textContent = `Phrases culte : ${character.phrases.join(", ")}`;

      bodyElement.appendChild(newH2Element);
      bodyElement.appendChild(newP);
    });
    bodyElement.removeChild(loadingElement);
  } catch (error) {
    console.log("Erreur");
    bodyElement.removeChild(loadingElement);
  }
}

fetchOffers();

// Etat de chargement
