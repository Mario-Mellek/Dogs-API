//Global variables
const imageDiv = document.querySelector("img");
const caption = document.querySelector("figcaption");
const url = "https://dog.ceo/api/breeds/image/random";

//fetching data using async await
async function getData() {
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`something isn't right ${error}`);
  }
}

//space and touch listeners
document.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    update();
  }
});
document.addEventListener("touchstart", update);

//Updating the DOM after fetching the data
function update() {
  getData().then((data) => {
    imageDiv.src = data.message;
    imageDiv.alt = "Dog Picture";
  });
}

update();
