console.log("hello world");

document.getElementById("theme").addEventListener("click", themeChange);

function themeChange() {
  console.log("button clicked");
  const bodyEl = document.getElementById("body");
  const projectSection = document.getElementById("projects");
  const heroEl = document.getElementById("hero");
  bodyEl.classList.toggle("dark-theme");
  projectSection.classList.toggle("dark-theme");
  heroEl.classList.toggle("dark-theme");
  heroEl.innerHTML = `<h1><span style="color:#fff">
  Hello my name is Ágnes Kuti-Palásthy.I am a web
  developer.</span>
</h1>`;
}
