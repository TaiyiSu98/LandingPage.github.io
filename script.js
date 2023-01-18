const sections = document.querySelectorAll("section");
const items = document.querySelectorAll(".menu-bar a li");
const bar = document.getElementById("bar");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  items.forEach((item) => {
    item.classList.remove("active");
    if (item.classList.contains(current)) {
      item.classList.add("active");
    }
  });
});
