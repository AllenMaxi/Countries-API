const banderas = document.getElementById("banderas")
//Accediendo a toda la url
const query = new URLSearchParams(window.location.search);
//El name viene de lo que colocamos como parametro
const params = query.get("name");
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

const fetchData = async () => {
try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
const data = await res.json()

const filtroData = data.filter(item => item.name === params)


pintarBanderillas(filtroData)
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
    </div>

</article>`
});
banderas.innerHTML = elementos
}
