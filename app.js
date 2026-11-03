(function () {
  "use strict()";

  const STORAGE_KEY = "animal-storage";

  const revealDog = document.getElementById("reveal-dog");
  const revealCat = document.getElementById("reveal-cat");
  const revealCow = document.getElementById("reveal-cow");
  const emptyState = document.getElementById("empty-state");
  const animalContainer = document.getElementById("animal-container");

  render();

  revealCat.addEventListener("click", (event) => {
    emptyState.classList.add("hidden");
    render();
  });

  function render() {
    const article = document.createElement("article");
    article.className = "animal-card";

    article.innerHTML = `
            <img src="tabby-cat.jpg" alt="cat image" class="image"> 
            <button class = "btn btn-outline">Hide Result</button>
            `;
  }
});
