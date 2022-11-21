class rickandmorty{
    constructor(nombre, especie,imagen){
    this.nombre=nombre
    this.especie=especie
    this.imagen=imagen

}

get information(){
    let array=[ this.nombre, this.especie, this.imagen]
    return array;
}
}
function show(params) { let id = document.getElementById("rickcards");
id.innerHTML += `<div class="container-card style="width: 18rem;">

<img src="${params[2]}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${params[0]}</h5>
  <p class="card-text">${params[1]}</p>
  
</div>
</div>`
   
   

}
async function getrick() {
 
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();
    let ricky = data.results;
    
    ricky.map((rickys) => {
        let personaje = new rickandmorty(rickys.name, rickys.species, rickys.image);
        show(personaje.information);
    });
}

getrick()