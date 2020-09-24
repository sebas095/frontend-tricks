const slide = document.getElementById("slide");
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

window.addEventListener("load", () => {
  const fragment = document.createDocumentFragment();

  for (const image of images) {
    const div = document.createElement("DIV");
    div.style.backgroundImage = `url(assets/img/${image})`;
    div.classList.add("slide__img");

    div.addEventListener("animationstart", (ev) => {
      ev.target.style.zIndex = 2;
      if (ev.target.nextElementSibling) {
        ev.target.nextElementSibling.style.zIndex = 1;
      } else {
        slide.firstElementChild.style.zIndex = 1;
      }
    });

    div.addEventListener("animationend", (ev) => {
      ev.target.style.zIndex = 0;
      ev.target.classList.remove("slide__img--animate");
      if (ev.target.nextElementSibling) {
        ev.target.nextElementSibling.classList.add("slide__img--animate");
      } else {
        slide.firstElementChild.classList.add("slide__img--animate");
      }
    });

    fragment.appendChild(div);
  }

  slide.appendChild(fragment);
  slide.firstElementChild.classList.add("slide__img--animate");
});
