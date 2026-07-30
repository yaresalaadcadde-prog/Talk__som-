/* ===============================
   TalkSom Store - script.js
================================= */

// ===============================
// Search Apps
// ===============================

const searchInput = document.getElementById("search");
const appCards = document.querySelectorAll(".app-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    appCards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ===============================
// Categories Filter
// ===============================

const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    appCards.forEach(card => {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }

    });

  });

});

// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeToggle) themeToggle.innerHTML = "☀️";
}

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

      localStorage.setItem("theme", "dark");

      themeToggle.innerHTML = "☀️";

    } else {

      localStorage.setItem("theme", "light");

      themeToggle.innerHTML = "🌙";

    }

  });

}

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#1976D2";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

// ===============================
// Page Loaded Animation
// ===============================

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "0.4s";
