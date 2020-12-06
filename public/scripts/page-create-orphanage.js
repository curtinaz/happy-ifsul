// create map
const map = L.map("mapid").setView([-29.937317,-51.0726502], 15)

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //store latitude ang longitude
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

//remove icon from map

    marker && map.removeLayer(marker)
    
//add icon layer

    marker = L.marker([lat,lng], { icon })
    .addTo(map)
})

//adicionar campo de fotos;

function addPhotoField(){
    //pegar container de fotos #images;
    const container = document.querySelector('#images')
    //pegar container para duplicar .new-image;
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar a duplicação da última image adicionada;
    const newFieldContainer = fieldsContainer[fieldsContainer.length  - 1].cloneNode(true)
    //verificar campo vazio
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return
    }
    //limpar o campo
    input.value = ""
    //adiciocnar o clone ao container de imagens;
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2){
        //limpar valor
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//selecionar do sim ou não
function toggleSelect(event){

//retirar a class . active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
//colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')

//atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value


//verificar se sim ou não
}