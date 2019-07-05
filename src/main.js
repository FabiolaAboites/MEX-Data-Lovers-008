const filtrado = document.querySelector('#listado');
      const boton = document.querySelector ('#boton');
      const resultado =document.querySelector('#resultado');
      <ul id="resultado" ></ul>

const filtrar = () => {
    const texto = filtrado.value.toLowerCase();
    for(let personaje of filtrar){
        let name = personaje.name.toLowerCase();
        if(name.indexOf(texto) !== -1){
            resultado.innerHTML +=
            <li>${personaje.name} - Valor: ${personaje.valor}</li>
        }
    }

    return 'filtrar';
  };
  
  window.filtrar = filtrar;

  boton.addEventListener('click', filtrar);