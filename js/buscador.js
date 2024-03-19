// crear selectores o variables

const isbn = document.querySelector("#isbn");
const nombre = document.querySelector("#nombre");
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo");
const autor = document.querySelector("#autor");
const edicion = document.querySelector("#transmision");
const categoria = document.querySelector("#color");
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
document.addEventListener( "DOMContentLoaded",()=>{
    //llenar el listado del select de year
    llenarSelect();

    mostrarAutos(autos);

});

isbn.addEventListener("input" ,e=>{
    datosBusqueda.isbn = e.target.value
    console.log(e.target.value)
    filtrarAuto();
    
})

nombre.addEventListener("input" ,e=>{
    datosBusqueda.nombre = Number(e.target.value)
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
    datosBusqueda.autor = Number(e.target.value)
    //console.log(datosBusqueda)
    filtrarAuto();
})

edicion.addEventListener("input" ,e=>{
    datosBusqueda.edicion = e.target.value
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
        
        const {isbn,modelo,nombre,precio,categoria,autor,edicion} = auto;
        
        autoHTML.textContent = `${isbn} - ${modelo} - Año: ${nombre} - Precio: ${precio}$ - categoria: ${categoria} - autor: ${autor} - Trasmision: ${edicion}`;
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
    const resultado = autos.filter(filtrarisbn).filter(filtrarnombre).filter(filtrarMaximo).filter(filtrarMinimo).filter(filtrarautor).filter(filtrarcategoria)

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

function filtrarisbn(auto){
    if(datosBusqueda.isbn){
        return auto.isbn === datosBusqueda.isbn
    }
    return auto;
}

function filtrarnombre(auto){
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

function filtrarautor(auto){
    if(datosBusqueda.autor){
        return auto.autor === datosBusqueda.autor
    }
    return auto;
}

function filtrarcategoria(auto){
    if(datosBusqueda.categoria){
        return auto.categoria === datosBusqueda.categoria
    }
    return auto;
}
