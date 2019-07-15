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

