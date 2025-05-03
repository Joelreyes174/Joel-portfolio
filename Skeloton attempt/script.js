// Load a component into a target div
function loadComponent(id, file, cssFile = null) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;

      if (cssFile) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssFile;
        document.head.appendChild(link);
      }
    })
    .catch(error => console.error(error));
}

const cardData = [
  {
    title: "Card One",
    description: "This is the first card with a beautiful image.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Card Two",
    description: "This one features different content.",
    image: "https://via.placeholder.com/400x200/ff8888"
  },
  {
    title: "Card Three",
    description: "More text and unique image.",
    image: "https://via.placeholder.com/400x200/88ff88"
  },
  {
    title: "Card four",
    description: "More text and unique image.",
    image: "https://via.placeholder.com/400x200/88ff88"
  }
];

function loadCardTemplate() {
  fetch('components/card/card.html')
    .then(res => res.text())
    .then(template => {
      const container = document.getElementById('card-container');
      cardData.forEach(item => {
        let cardHTML = template
          .replace(/{{title}}/g, item.title)
          .replace(/{{description}}/g, item.description)
          .replace(/{{image}}/g, item.image);
        container.innerHTML += cardHTML;
      });
    });
}
loadCardTemplate("card-container", "components/card/card.html", "components/card/card.css");

// Load each component + its CSS
loadComponent("header", "components/header/header.html", "components/header/header.css");
loadComponent("namecard", "components/name card/name_card.html", "components/name card/name_card.css");
loadComponent("footer", "components/footer/footer.html", "components/footer/footer.css");
loadComponent("baseballcard", "components/baseball_card/baseball_card.html", "components/baseball_card/baseballcard.css");






