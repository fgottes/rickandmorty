import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElements";
import { getCharacter, getCharacters } from "../../utils/api";


export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

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
    className: "randomGeneratorButton",
    innerText: "Load random character",
    onclick: async () => {
      
      const randomNumber = Math.floor (Math.random() *(670)) + 1;
      
      const randomCharacter = await getCharacter(randomNumber);
      characterContainer.innerHTML = "";
      characterContainer.append(createCard(randomCharacter));
     
    },
    
      
     
  });

  const characterContainer = createElement ("div",{
    className: "container",
  })

  const container = createElement("div", {
    className: "container",
    childs: [characterContainer, randomButton],
  });
  return container;
};

//_________________________________________________________________________________________________________________________________________:

export const CharactersFromAPIWithFilter = (
  args,
  {
    loaded: { characters } }
) => {
  const input = createElement("input", {
    className: "searchField",
    placeholder: "Search here...",
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });
  
  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "container2",
    childs: [input, characterContainer],
  });
  
  return container;
};

CharactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];