const button = document.getElementById("button");
const modal = document.getElementById("modal");

button.addEventListener("click", () => modal.classList.add("modal--show"));

modal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__button") ||
    e.target.classList.contains("modal__close")
  )
    modal.classList.remove("modal--show");
});
