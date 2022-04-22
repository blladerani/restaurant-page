import domController from "./dom.js";

export default () => {
  const content = document.querySelector("#content");
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  const navs = ["Home", "Menu", "Contact"];
  for (const element of navs) {
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");
    navItem.addEventListener("click", () =>
      domController.displayPage(navItem.textContent)
    );
    const navLink = document.createElement("a");
    const navText = document.createTextNode(element);
    navLink.appendChild(navText);
    navItem.appendChild(navLink);
    navbar.appendChild(navItem);
  }
  content.appendChild(navbar);
};
