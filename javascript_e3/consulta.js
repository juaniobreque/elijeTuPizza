import { crearCard } from "./card.js";
import { mostrarError } from "./error.js";

export function consultarBD(id) {
    const localPizzas = localStorage.getItem('pizzas')
    const localJSONPizzas = JSON.parse(localPizzas)

    const pizzaBuscada = localJSONPizzas.find(pizza => pizza.id == id)

    if (!pizzaBuscada) {
        mostrarError('No se encontró una pizza con ese ID')
    } else {
        crearCard(pizzaBuscada)
    }
}