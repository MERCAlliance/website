const logo = document.querySelector(".landing__logo-bg");
const embers = document.querySelector(".landing__embers");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 6;
  const y = (e.clientY / window.innerHeight - 0.5) * 6;

  logo.style.transform = `translate(${x}px, ${y}px)`;
  embers.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
});
