const card = document.querySelector('.card')

export function crearCard(pizza) {
    limpiarHTML()
    
    // Imagen
    const img = document.createElement('img')
    img.classList.add('card-img')
    img.src = pizza.url
    card.appendChild(img)

    // Contenedor de info
    const info = document.createElement('div')
    card.appendChild(info)

    // Nombre
    const title = document.createElement('h2')
    title.innerText = pizza.nombre
    info.appendChild(title)

    // Lista de ingredientes
    const tituloIngedientes = document.createElement('h3')
    tituloIngedientes.innerText = 'Ingredientes:'
    info.appendChild(tituloIngedientes)
    const list = document.createElement('ul')
    info.appendChild(list)
    pizza.ingredientes.forEach(ingrediente => {
        const elementoIngr = document.createElement('li')
        elementoIngr.innerText = "•"  + ingrediente
        list.appendChild(elementoIngr)
    });

    // Precio
    const precio = document.createElement('p')
    precio.innerText = `$ ${pizza.precio}`
    info.appendChild(precio)

}

export function limpiarHTML(){
    while (card.firstChild) {
        card.removeChild(card.firstChild)
    }
}