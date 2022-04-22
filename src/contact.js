import img from "./imgs/cow.jpg";

export default () => {
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  main.classList.add("main");
  const contactElement = document.createElement("div");
  contactElement.classList.add("contact-element");
  const contactImage = document.createElement("img");
  contactImage.setAttribute("src", "imgs/cow.jpg");
  contactElement.appendChild(contactImage);

  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");
  const h2 = document.createElement("h2");
  h2.textContent = "Headchef";
  const p1 = document.createElement("p");
  p1.textContent = "Phone: 5555-5555-5555";
  const p2 = document.createElement("p");
  p2.textContent = "E-mail: epicemail@mail.com";
  contactContent.appendChild(h2);
  contactContent.appendChild(p1);
  contactContent.appendChild(p2);
  contactElement.appendChild(contactContent);
  main.appendChild(contactElement);
  content.appendChild(main);
};
