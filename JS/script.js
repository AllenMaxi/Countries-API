const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

const fetchData = async () => {
try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
const data = await res.json()
// console.log(data)
pintarBanderillas(data)
formularioCliente(data)
filtros(data)
} catch (error) {
    console.log(error)
}
 }

const pintarBanderillas = data => {
let elementos = "";
data.forEach(element => {
    elementos += `  <article class="card">
    <img src="${element.flag}" class="img-fluid">
    <div class="card-content">
        <h3>${element.name}</h3>
        <p>
          <b>Population:</b>
          ${element.population}
        </p>
        <p>
          <b>Capital:</b>
          ${element.capital}
        </p>
        <p>
          <b>Region:</b>
          ${element.region}
        </p>
        <p>
        <a href="pais.html?name=${element.name}"> Mas info</a>
        </p>
    </div>

</article>`
});
banderas.innerHTML = elementos
}
