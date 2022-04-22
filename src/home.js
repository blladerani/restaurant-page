export default () => {
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  main.classList.add("main");

  const mainElement1 = document.createElement("div");
  const mainElement2 = document.createElement("div");
  const mainElement3 = document.createElement("div");
  mainElement1.classList.add("main-element");
  mainElement2.classList.add("main-element");
  mainElement3.classList.add("main-element");

  mainElement1.appendChild(
    document
      .createElement("p")
      .appendChild(
        document.createTextNode(
          "This place has the finest quality grass that you can find on theplaneth earth. This place will reveal your goat side and it will befun. This is exactly the kind of place that I like to return to again and again."
        )
      )
  );
  let goatText = document.createElement("h3");
  goatText.appendChild(document.createTextNode("- Some random goat"));
  mainElement1.appendChild(goatText);
  let hoursText =
    "Sunday: 8am - 8pm <br />Monday: 6am - 6pm <br />Tuesday: 6am - 6pm<br /> Wednesday: 6am - 6pm <br />Thursday: 6am - 10pm <br />Friday: 6am - 10pm <br />Saturday: 8am - 10pm";
  let hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";
  mainElement2.appendChild(hoursHeader);
  const hours = document.createElement("p");
  hours.innerHTML = hoursText;
  mainElement2.appendChild(hours);
  let location = document.createElement("h2");
  location.textContent = "Location";
  mainElement3.appendChild(location);
  let locationText = document.createElement("p");
  locationText.textContent = "Epic cool location probably on some mountain";
  mainElement3.appendChild(locationText);
  main.appendChild(mainElement1);
  main.appendChild(mainElement2);
  main.appendChild(mainElement3);
  content.appendChild(main);
};
