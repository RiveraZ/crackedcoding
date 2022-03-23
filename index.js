const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("GetGoodDom");
  const body = document.querySelector("body");
  const hiddenP = document.createElement("p");
  const node = document.createTextNode("2-0 against Dom");
  hiddenP.appendChild(node);
  body.appendChild(hiddenP);
});
