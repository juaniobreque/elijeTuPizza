import { consultarBD } from "./consulta.js"
import { pizzas } from "./pizzas.js"
import { mostrarError } from "./error.js"

const form = document.getElementById('form')

window.addEventListener('load', () => {
    const strPizzas = JSON.stringify(pizzas)
    localStorage.setItem('pizzas', strPizzas)
    
    form.addEventListener('submit', buscarPizza)
})

function buscarPizza(e) {
    e.preventDefault();
    const id_pizza = document.getElementById('input_id').value
    if (!id_pizza) {
        mostrarError('Debe llenarse el campo ID')
    } else {
        consultarBD(id_pizza)

    }
}