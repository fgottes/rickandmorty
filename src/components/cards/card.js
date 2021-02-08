import { createElement } from "../../utils/createElements";

export function createCard({ imgSrc, name, species, origin }) {
  return createElement("div", {
    className: "card",
    children: [
      createElement("img", {
        className: "card_portrait",
        src: imgSrc,
      }),

      createElement("h2", {
        className: "card_name",
        innerText: name,
      }),

      createElement("p", {
        className: "card_species",
        innerText: species,
      }),

      createElement("p", {
        className: "card_origin",
        innerText: origin,
      }),
    ],
  });
}
