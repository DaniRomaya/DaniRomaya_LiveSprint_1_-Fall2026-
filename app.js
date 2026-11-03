(function () {
  "use strict()";

  const revealDog = document.getElementById("reveal-dog");
  const revealCat = document.getElementById("reveal-cat");
  const revealCow = document.getElementById("reveal-cow");
  const animalContainer = document.getElementById("animal-container");

  const animals = {
    cat: {
      name: "CAT",
      image: "tabby-cat.jpg",
      alt: "A tabby cat",
    },

    dog: {
      name: "DOG",
      image: "dog.jpg",
      alt: "A golden retriever",
    },

    cow: {
      name: "COW",
      image: "cow.jpg",
      alt: "A Highland cow",
    },
  };

  function render(animalType) {
    let card = document.getElementById(`${animalType}-card`);

    if (card) {
      card.classList.remove("hidden");
      return;
    }

    const animal = animals[animalType];

    card = document.createElement("article");
    card.id = `${animalType}-card`;
    card.className = "animal-card";

    card.innerHTML = `
      <img src="${animal.image}" alt="${animal.alt}">

      <button class="btn btn-hide" data-animal="${animalType}">
        Hide Result
      </button>
    `;

    // Add the card to the page
    animalContainer.appendChild(card);
  }

  revealCat.addEventListener("click", () => {
    render("cat");
  });

  revealDog.addEventListener("click", () => {
    render("dog");
  });

  revealCow.addEventListener("click", () => {
    render("cow");
  });

  animalContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-hide")) {
      const animalType = event.target.dataset.animal;

      const card = document.getElementById(`${animalType}-card`);

      card.classList.add("hidden");
    }
  });
})();
