console.log("hello world");

document.getElementById("theme").addEventListener("click", themeChange);
const bodyEl = document.getElementById("body");
const projectSection = document.getElementById("projects");
const heroEl = document.getElementById("hero");
const introEl = document.getElementById("intro");

function themeChange() {
  console.log("button clicked");

  bodyEl.classList.toggle("dark-theme");
  projectSection.classList.toggle("dark-theme");
  heroEl.classList.toggle("dark-theme");
  introEl.classList.toggle("dark-theme");
}
