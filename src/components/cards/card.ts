import { createElement } from "../../utils/createElements";

export function createCard({ imgSrc, name, status, species, origin }) {
return createElement("article", {
    className: "flip_card",
    childs: [
      createElement("div", {
        className: "flip_card_inner",
        childs: [
          createElement("div", {
            className: "flip_card_front",
            childs: [
              createElement("img", {
                className: "card_portrait",
                src: imgSrc,
              }),
              
              createElement("div", {
                className: "card__info",
                childs: [
                  createElement("h2", {
                    className: "info__name",
                    innerText: name,
                  }),
            
                  createElement("p", {
                    className: "card__status",
                    innerText: `${status === "Alive" ? "👌" : "👎"} - ${status}`,
                  }),
            
                  createElement("p", {
                    className: "card__species",
                    innerText: species,
                  }),
            
                  createElement("p", {
                    className: "card__origin",
                    innerText: origin.name,
                  }),

                  
                ]
              }),
              
            ]
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("p", {
                innerText: "Some random BS i chose over lorem because if have fu'ed humor.",
              }),
              createElement("p", {
                innerText: "Just some more BS to try something out."
              })
            ]
          })
        ],
      }),
    ],
  });
}

              

          

     


