// crear selectores o variables

const isbn = document.querySelector("#isbn");
const nombre = document.querySelector("#nombre");
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo");
const autor = document.querySelector("#autor");
const edicion = document.querySelector("#edicion");
const categoria = document.querySelector("#categoria");
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max-10
//console.log(min)

//crear objeto
const datosBusqueda = {
    isbn:"",
    nombre: "",
    minimo:"",
    maximo:"",
    autor:"",
    edicion:"",
    categoria:"",
}

//evento

isbn.addEventListener("input" ,e=>{
    datosBusqueda.isbn = e.target.value
    console.log(e.target.value)
    filtrarAuto();
    
})

nombre.addEventListener("input" ,e=>{
    datosBusqueda.nombre = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

minimo.addEventListener("input" ,e=>{
    datosBusqueda.minimo = Number(e.target.value)
    //console.log(datosBusqueda)
    filtrarAuto();
})

maximo.addEventListener("input" ,e=>{
    datosBusqueda.maximo = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

autor.addEventListener("input" ,e=>{
    datosBusqueda.autor = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

edicion.addEventListener("input" ,e=>{
    datosBusqueda.edicion = Number(e.target.value)
    //console.log(datosBusqueda)
    filtrarAuto();
})

categoria.addEventListener("input" ,e=>{
    datosBusqueda.categoria = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

function llenarSelect(){
    for(let i=max;i>min;i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        nombre.appendChild(opcion);
    }
}

function mostrarAutos(arregloAutos){
    limpiarHTML();

    arregloAutos.forEach(auto => {
        const autoHTML = document.createElement("p")
        
        const {isbn,nombre,precio,categoria,autor,edicion} = auto;
        
        autoHTML.textContent = `${isbn} - Nombre: ${nombre} - Autor: ${autor} - Categoria: ${categoria} - Edicion: ${edicion} - Precio: ${precio}$ `;
        resultado.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    const contenedor = document.querySelector("#resultado");
    
    while (contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarIsbn).filter(filtrarNombre).filter(filtrarMaximo).filter(filtrarMinimo).filter(filtrarAutor).filter(filtrarCategoria).filter(filtrarEdicion)

    console.log(resultado)
    
    if(resultado.length){  
        mostrarAutos(resultado)
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('No hay resultados que coincidan con su busqueda'));
    document.querySelector('#resultado').appendChild(noResultado); 
}

function filtrarIsbn(auto){
    if(datosBusqueda.isbn){
        return auto.isbn === datosBusqueda.isbn
    }
    return auto;
}

function filtrarNombre(auto){
    if(datosBusqueda.nombre){
        return auto.nombre === datosBusqueda.nombre
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}

function filtrarAutor(auto){
    if(datosBusqueda.autor){
        return auto.autor === datosBusqueda.autor
    }
    return auto;
}

function filtrarCategoria(auto){
    if(datosBusqueda.categoria){
        return auto.categoria === datosBusqueda.categoria
    }
    return auto;
}

function filtrarEdicion(auto){
    if(datosBusqueda.edicion){
        return auto.edicion === datosBusqueda.edicion
    }
    return auto;
}
