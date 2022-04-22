export default () => {
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  main.classList.add("main");
  const mainElement = document.createElement("div");
  mainElement.classList.add("main-element");
  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "Grass";
  const menuText = document.createElement("p");
  menuText.textContent =
    "Yes! You can find some high quality grass right here.";
  mainElement.appendChild(menuHeader);
  mainElement.appendChild(menuText);
  main.appendChild(mainElement);
  content.appendChild(main);
};
