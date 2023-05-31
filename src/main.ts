import * as Categorias  from "./modules/categorias.js";
import { plan } from "./modules/types.js";
import * as Personal from "./modules/personal.js";
import * as Serie from "./modules/serie.js";
import * as Episodio from "./modules/episodio.js";
import * as Plataforma from "./modules/plataforma.js";


//Object.defineProperty(categorias, 'id', {value: 'a', writable: false});
/**
 * Metodos:
 * 1. Mostrar el listado de todas las series +
 * 2. Mostrar el detalle de una serie en particular +
 * 3. Mostrar el listado de categorias +
 * 4. Mostrar el listado de directores y actores de una serie  +
 * 5. Mostrar el detalle de un director y un actor +
 * 6. Mostrar el listado de las plataformas
 * 7. Mostrar detalle de una plataforma +
 * 8. Crear una nueva serie +
 * 9. Crear una nueva categoria +
 * 10. Crear un nuevo actor +
 * 11. Crear un nuevo director +
 * 12. Agregar una categoria a una serie +
 * 13. Agregar un actor a una serie +
 * 14. Agregar un director a una serie +
 */


function mostrarSerie(nombre:string): void{
    let serie = Serie.buscarSerie(nombre)
    if(serie){
        console.log(serie)
    }else{
        console.log(`No se encontro la serie ${nombre}`)
    }
}

function mostrarActor(nombre:string): void{
    let actor = Personal.buscarActor(nombre)
    if(actor){
        console.log(actor)
    }else{
        console.log(`No se encontro el actor ${nombre}`)
    }
}

function mostrarDirector(nombre:string):void{
    let director = Personal.buscarDirector(nombre)
    if(director){
        console.log(director)
    }else{
        console.log(`No se encontro el director ${nombre}`)
    }
}

function mostrarPlataforma(nombre:string):void{
    let plataforma = Plataforma.buscarPlataforma(nombre)
    if(plataforma){
        console.log(plataforma)
    }else{
        console.log(`No se encontro el plataforma ${nombre}`)
    }
}








