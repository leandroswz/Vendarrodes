let inputSearch = document.querySelector('#input-search')

let json = [

    {
        "name"  : "Ford Fusion 2014",
        "file"  : "fusion.jpg",
        "price" : 45000.00
    },
    {
        "name"  : "Chevrolet Tracker 2021",
        "file"  : "GM-tracker_2021.jpg",
        "price" : 90000.00
    },    {
        "name"  : "Hyundai HB20 2020",
        "file"  : "hb20.jpg",
        "price" : 60000.00
    },    {
        "name"  : "Jeep Renegade MOAB 2018",
        "file"  : "renegade.jpg",
        "price" : 145000.00
    },    {
        "name"  : "Hyundai Tucson 2022",
        "file"  : "tucson.jpg",
        "price" : 230000.00
    }

]

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

listCards(json)