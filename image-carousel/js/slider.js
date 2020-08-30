// Images
const images = [
  "img/slide/1.jpg",
  "img/slide/2.jpg",
  "img/slide/3.jpg",
  "img/slide/2.jpg",
  "img/slide/1.jpg",
  "img/slide/3.jpg",
];

// Slider
const slider = document.getElementById("slider-js");
const sliderContainer = document.getElementById("slider-container");
const sliderNav = document.getElementById("slider-navigation");

slider.style.width = `${images.length * 100}%`;
let active = true;

for (const img in images) {
  // Load images
  slider.innerHTML += `
    <img src="${images[img]}" class="slider__img" style="width: ${
    100 / images.length
  }%;">`;

  sliderNav.innerHTML += `<span class="${
    img == 0 ? "slider-nav slider-nav--active" : "slider-nav"
  }" id="slider-nav-${img}"></span>`;
}

let count = 0;

const counter = () => {
  if (active) {
    if (count >= images.length) count = 0;
    setInterval(slideImage(count), 2000);
    setInterval(setActive(count), 2000);
    count++;
  }
};

const startInterval = () => setInterval(counter, 2000);

const slideImage = (id) => {
  if (!active && !isNaN(id)) {
    count = id;
    setActive(id);
  }

  slider.style.left = `-${id}00%`;
};

const navIcons = document.querySelectorAll(".slider-nav");

const setActive = (id) => {
  navIcons.forEach((icon) =>
    icon.attributes.id.nodeValue === `slider-nav-${id}`
      ? icon.classList.add("slider-nav--active")
      : icon.classList.remove("slider-nav--active")
  );
};

sliderContainer.addEventListener("mouseover", () => {
  if (active) active = false;
});

sliderContainer.addEventListener("mouseout", () => {
  if (!active) active = true;
});

sliderNav.addEventListener("click", (ev) => {
  const id = Number(ev.target.id.split("-")[2]);
  slideImage(id);
});

startInterval();
