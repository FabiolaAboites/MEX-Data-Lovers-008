// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//window.example = example

//descomentar para mostrar data//
const root = document.getElementById('root')
const btn = document.getElementById('buscar')
const data = RICKANDMORTY.results
const ordenar = document.getElementById("ordenar");
const botonordenar = document.getElementById("ordenar")

//Función para pintar data por propiedades//
const printData = (data) => {
  let str = ''
data.forEach(element => {
  let name = element.name
  let origin = element.origin.name
  let species = element.species
  let image = element.image
  let status = element.status
  let gener = element.gender
  str +=  `<div class="fondo">
  <h3 class = "prueba">${name}</h3>
  <p class="prueba">${origin}</p>
  <p>${species}</p>
  <img src=${image} alt="">
  <p> ${status}</p>
  <p> ${gener}</p>
</div>`

});
root.innerHTML = str
}

printData(data)

//llamar botones de nombre
//function GuardarValor() {
  //document.getElementById("receive-name").value.addEventListener("click", () => document.getElementById("input-name").value);

  //RICKANDMORTY.find(item =>{
    //return (/data/g).test(item.name)
  //})
  //console.log(data)
  // Selection.addEventListener)('change' , () => {
  //  const valor = Selection.value
  // })

//Funciones de filtrado por status  
let filtrar = (data) => {
  const result = data.filter(element => element.status == 'Dead')
  printData(result);
}

let filtrardos = (data) => {
  const result = data.filter(element => element.status == 'Alive')
  printData(result);
}

let filtrartres = (data) => {
  const result = data.filter(element => element.status == 'unknown')
  printData(result);
}

 ordenar : (data,propiedad,orden) => {
  let resultado = {};
  if(orden === "ascendente" || orden === "numAscendente") {
  resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? 1 : -1));
  } 
  else if(orden === "descendente" || orden === "numDescendente") {
  resultado = data.sort ((a,b) => (a[propiedad] > b[propiedad] ? -1 : 1));
  }
  return resultado;
},

buscar.addEventListener('click', () => {
  ordenar(data,propiedad,orden)
})
