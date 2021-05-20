const formulario = document.getElementById("formulario");
const inputFormulario = document.getElementById("inputFormulario");


const formularioCliente = data => {
    formulario.addEventListener("keyup", e => {
        e.preventDefault()
    const letraCliente = inputFormulario.value.toLowerCase()
    // console.log(letraCliente)

//Array filtrado (Retornar lo que va escribiendo el cliente)
   const arrayFiltrado = data.filter(item => {
    const letraAPI = item.name.toLowerCase()
    if(letraAPI.indexOf(letraCliente) !== -1){
         return item//Se retornara lo que viene de la API con lo que el cliente esta buscando
    }
   })
    pintarBanderillas(arrayFiltrado)
    })
}

