

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const url = "http://localhost:3000/toys"
formHandler()
getArrayofToyObjects()


function getArrayofToyObjects(){
  fetch(url)
  .then(r => r.json())
  .then(arrayOfToyObjs => arrayOfToyObjs.forEach(renderToy))
}
// grab div with the id "toy-collection."class="card"> for each toy and add it to the toy-collection div.
function renderToy(toy) {
  const toyCollectionDiv = document.getElementById('toy-collection')
  const card = document.createElement('div')
  card.className = "card"
  const h2 = document.createElement("h2")
  h2.innerText = toy.name
  const img = document.createElement('img')
  img.className = "toy-avatar"
  img.src = toy.image
  const p = document.createElement('p')
  p.innerText = toy.likes
  const btn = document.createElement('btn')
  btn.addEventListener('click', () => {
    p.innerText = (++toy.likes)
  })
  btn.setAttribute = ("class", "like-btn")
  btn.setAttribute = toy.id
  btn.innerText = "Like ❤️"
  card.append(h2, img, p, btn)

  toyCollectionDiv.append(card)
}
function formHandler(){

const form = document.querySelector(".add-toy-form")
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const name = e.target.name
    const image = e.target.image
/*
if the key is the same name as the variable it points to, you can do the shorthand like below
*/
    newToy = {
      name,
      image
    }
    renderToy(newToy)
    e.target.reset()

  })
}

