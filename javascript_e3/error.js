import { limpiarHTML } from "./card.js"


export function mostrarError(message) {
    limpiarHTML()
    const card = document.querySelector('.card')
    const alerta = document.createElement('h2')
    alerta.innerText = message
    card.appendChild(alerta)
}