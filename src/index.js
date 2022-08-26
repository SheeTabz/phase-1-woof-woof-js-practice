document.addEventListener("DOMContentLoaded", () => {

    // ADD DOG NAMES TO THE NAV BAR
let pupDetails    
fetch("http://localhost:3000/pups")
.then(response => response.json())
.then(data =>  {
    pupDetails = data
    updateNavBar(data)
})

const updateNavBar = (item) => {
  item.forEach(pups => {
    const nav = document.getElementById("dog-bar")
    const span = document.createElement("span")
    span.innerText = pups.name
    nav.appendChild(span)
  span.addEventListener("click", () => {
    appendDogInfo(pups)
})
  })  
}

const appendDogInfo = (pups) => {
    
    const dogContainer = document.getElementById("dog-info")
    const image = document.createElement("img")
    image.src = pups.image
    const h2 = document.createElement("h2")
    h2.innerText = pups.name
    const button = document.createElement("button")
  button.innerText = 'This is a ..'
    button.addEventListener("click", () => {
        if(pups.isGoodDog === true) {
            button.textContent = "Good Dog!"
        }else{
            button.textContent = "Bad Dog!" 
        }
    })
    dogContainer.appendChild(image)
dogContainer.appendChild(h2)
  dogContainer.appendChild(button)
 }
const filterButton = document.getElementById("good-dog-filter")
filterButton.addEventListener("click", () => {
    console.log(pups)
    filterDogs(pups)
})


const filterDogs = (good) => {
console.log(good)
}

})