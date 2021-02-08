import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    species: "Human",
    origin: "Earth (C-137)",
  });

export const CrabSpider = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
    name: "Crab Spider",
    species: "Alien",
    origin: "Hideout Planet",
  });

export const RegularTyrionLannister = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/407.jpeg",
    name: "Regular Tyrion Lannister",
    species: "Human",
    origin: "Inderdimensional Cable",
  });
