import home from "./home.js";
import navbar from "./navbar.js";
import menu from "./menu.js";
import contact from "./contact.js";

export default (() => {
  const content = document.querySelector("#content");
  function resetContent() {
    content.innerHTML = "";
  }

  function createNavbar() {
    navbar();
  }

  function displayPage(page) {
    switch (page) {
      case "Home":
        resetContent();
        createNavbar();
        home();
        break;
      case "Menu":
        resetContent();
        createNavbar();
        menu();
        break;
      case "Contact":
        resetContent();
        createNavbar();
        contact();
        break;
    }
  }

  return {
    resetContent,
    displayPage,
  };
})();
