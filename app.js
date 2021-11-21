let button = document.querySelector("#search")
let imgHere = document.querySelector("#imgHere")
//Event Listener for the button to run apiRequest when clicked.
button.addEventListener("click", () => {
  console.log("button pressed")
  apiRequest()
})

//Async function to fetch Data
async function apiRequest() {
  let apiKey = "a7QQnOda2bEMYXP9s607vSgV6vMBJHVYrOxf8iLJ"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  console.log(response)
  let data = await response.json()
  displayApiData(data)
  console.log(data)
}

//display nasa api info
function displayApiData(data) {
imgHere.src = data.url
}
