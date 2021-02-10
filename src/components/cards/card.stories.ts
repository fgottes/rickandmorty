import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElements";
import { getCharacter, getCharacters } from "../../utils/api";


export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

// export const Rick = () =>
//   createCard({
//     imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     name: "Rick Sanchenz",
//     status: "Alive",
//     species: "Human",
//     origin: { name: "Earth (C-137)" },
//   });
// export const Morty = () =>
//   createCard({
//     imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//     origin: { name: "Earth (C-137)" },
//   });
//   export const CrabSpider = () =>
//   createCard({
//     imgSrc: "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
//   name: "Crab Spider",
//   status: "Alive",
//   species: "Alien",
//   origin: { name: "Hideout Planet"},
//   });

  //________________________________________________________________________________________________________________________________________:

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
      name: "Crab Spider",
      status: "Alive",
      species: "Alien",
      origin: { name: "Hideout Planet"},
    },
    
 

  ];

//_________________________________________________________________________________________________________________________________________:

 const container = createElement("article",{
   className: "container",
   childs: characters.map((character) => createCard(character)),
  });
  
  
  return container;
  
};

//_________________________________________________________________________________________________________________________________________:

export const CharacterFromAPI = (args, {loaded: { character} }) => {
  return createCard(character);
  
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(7),
  }),
];

export const CharactersFromAPI = (args, {loaded: { characters } }) => {
  const container = createElement("article",{
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
//__________________________________________________________________________________________________________________________________________:
export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      
      const randomNumber = Math.floor (Math.random() *(670)) + 1;
      
      const randomCharacter = await getCharacter(randomNumber);
      container.append(createCard(randomCharacter));
     
    },
    // onclick: async function (params:type) {
      
    // }
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};