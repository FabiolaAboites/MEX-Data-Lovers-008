// const filtrar = () => {
//     const texto = filtrado.value.toLowerCase();
//     //console.log(filtrar)
//     for(let personaje of filtrar){
//         let name = personaje.name.toLowerCase();
//         if(name.indexOf(texto) !== -1){
//         resultado.innerHTML += `<li>
//        <img src = "${rickandmorty.img}">
//        ${personaje.name} - Valor: ${personaje.valor}
//        ${personaje.status} 
//        ${personaje.gener} 
//        ${personaje.species}
//        </li>`
//         }
//     }
// }

buscar.addEventListener('click', () => {
  filtrar(data)
})

const ordenar = () => {

  let ordenarData = ordenar.value;
  let propiedades= "";
  let str = "";
  if(ordenarData === "ascendente" || ordenarData === "descendente"){
    propiedad = "name";
  }
  else {
    propiedad = "id";
  }

  const resultado = window.RICKANDMORTY.ordenar(data,propiedades,ordenarData);
  str = imprimir(resultado);
  imprimirOrden.innerHTML=str;

};
ordenar.addEventListener("change", ordenar);