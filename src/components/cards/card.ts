import { createElement } from "../../utils/createElements";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card_portrait",
        src: imgSrc,
      }),

      createElement("h2", {
        className: "card_name",
        innerText: name,
      }),

      createElement("p", {
        className: "card_status",
        innerText: `${status === "Alive" ? "👌" : "👎"} - ${status}`,
      }),

      createElement("p", {
        className: "card_species",
        innerText: species,
      }),

      createElement("p", {
        className: "card_origin",
        innerText: origin.name,
      }),
    ],
  });
}


