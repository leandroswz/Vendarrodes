let inputSearch = document.querySelector('#input-search')

let json

alert('throttle')

fetch('fase2/database.json')
    .then(response => response.json())
    .then(jsonApi => {
        json = jsonApi
        listCards(json)
    })



function listCards(json){
    let cardsContainer = document.querySelector(".cards-container")
    let cardsQtd = document.querySelector('#cars-qtd')
    
    cardsContainer.innerHTML = ""

    if (json.length >= 1) {
        cardsQtd.innerHTML = `Carros Encontrados: ${json.length}`
    } else {
        cardsQtd.innerHTML = "Nenhum Carro Encontrado!"
        return
    }

    for(let i in json) {
        cardsContainer.innerHTML += `
       
        <div class="card">
            <img src="img/${json[i].file}" alt="${json[i].name}">
            <h3>${json[i].name}</h3>
            <p>${json[i].price}</p>
        </div>

        `
    }
}

function searchCars() {
    let jsonFiltered = json.filter(json => json.name.toLowerCase().includes(inputSearch.value))
    listCards(jsonFiltered)
}

inputSearch.onkeyup = searchCars
