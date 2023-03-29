let nombre;
let edad;
let dep;
let articulo1;
let precio1;
let articulo2;
let precio2;
const array = [];
let Articulos = [{
    Articulo1 : articulo1,
    Precio1 : precio1,
    Articulo2:articulo2,
    Precio2: precio2,
}];

function lectDatos (){
    nombre = prompt(`Ingresa tu Primer Nombre:`);
    edad = Number(prompt(`Ingresa tu edad:`))
    dep = prompt(`Ingresa tu Deporte Favorito:`)

    alert(`Tus datos son:
    Tu nombre es ${nombre}
    Tu edad es ${edad}
    Tu deporte favorito es ${dep}`)
};

function crear(){
    const objeto = {
        Nombre : nombre,
        Edad : edad,
        Deporte : dep
    };
    console.log(objeto);
    alert(`Objeto creado = \n {Nombre: ${objeto.Nombre} \n Edad: ${objeto.Edad} \n Deporte: ${objeto.Deporte}}`);
};

function crear0(){
    const producto = prompt("Ingrese el nombre del producto: ")
    const precio = Number(prompt("Ingrese el precio: "))
    const objeto = {
        Producto: producto,
        Precio: precio
    };
    console.log(objeto);
    alert(`Objeto creado = \n {Producto:${objeto.Producto} \n Precio: ${objeto.Precio}}`);
};

function crearArray(){
    for (let i = 0; i <= 5; i--) {
        alert(`Puedes agregar ${i+5} datos?`);
        array.push(prompt("Ingresa cualquier tipo de dato:"));
        if (array.length == 5){
        alert(`Array = [${array}]`);
        console.log(array)
        break
        }
    }

    return array;
};

function elimione(){
    array.shift();
    alert(`Array = [${array}]`);
};

function elimiul(){
    array.pop();
    alert(`Array = [${array}]`);
};

function elimicual(){
    let num = Number(prompt('Ingresa el valor a eliminar'))
    array.splice(num, 1);
    alert(`Array = [${array}]`);
};

function agregarone(){
    let elemento = prompt('Ingresa el elemento nuevo del array')
    array.unshift(elemento);
    alert(`Array = [${array}]`);
};

function agregarfin(){
    let elemento = prompt('Ingresa el elemento nuevo del array')
    array.push(elemento);
    alert(`Array = [${array}]`);
};


function arObj() {
    articulo1 = prompt("Ingresa el nombre de un articulo");
    precio1 = Number(prompt("Ingresa el precio del articulo"));
    articulo2 = prompt("Ingresa el nombre de otro articulo");
    precio2 = Number(prompt("Ingresa el precio del articulo"));
    Articulos = [{
        Articulo1 : articulo1,
        Precio1 : precio1,
        Articulo2:articulo2,
        Precio2: precio2,
    }];
    console.log(Articulos);
    alert( JSON.stringify(Articulos))
};

function forObj(){
    for (let i = 0; i <= 5; i--) {
        alert(`Puedes agregar ${i+3} datos al Array`);
        Articulos.push(prompt("Ingresa cualquier tipo de dato:"));
        if (Articulos.length == 4){
            alert(JSON.stringify(Articulos));
            break
        }
}
};

function EachObj(){
    console.log("Aquí está tu Array con Objetos:");
    Articulos.forEach(element => console.log(Object.values(Articulos)));
    alert("Mira la consola")
}

function MapObj(){
    alert("te voy a agregar una jaja (>‿◠)✌")
    alert("Mira la consola")
    let final = "jaja";
    let jaj = Articulos.map(element => element+ final);
    console.log(jaj);
}

let opcion = -1;

while(opcion!=0){
    alert(
    `-------MENÚ-------
    1. Lectura de Datos
    2. Crear y Mostrar Objeto
    3. Crear y Mostrar Array
    4. Elimine el primer elemento del Array
    5. Elimine el último elemento del Array
    6. Eliminar cualquier elemento del Array
    7. Agregar elemenento al comienzo del Array
    8. Agregar elemento al final del Array
    9. Crear Array con Objetos
    10. Iterar Array con Objetos con FOR
    11. Iterar Array con Objetos con ForEach
    12. Iterar Array con Objetos con Map y crear copia
    13. Proceso Personal
    0. Salir
    `
)


opcion= parseInt(prompt(`Escoge una opción`));

if (opcion == 1){
    lectDatos();
}else if (opcion ==2){
    let des = window.confirm("Deseas Crear un Objeto con tus Datos Ingresados?");
    if (des == true){
        crear();
    }else if(des == false){
        crear0();
    }
} else if(opcion == 3){
    crearArray();
}else if(opcion == 4){
    elimione();
}else if(opcion == 5){
    elimiul();
}else if(opcion == 6){
    elimicual();
}else if(opcion == 7){
    agregarone();
}else if(opcion == 8){
    agregarfin();
}else if(opcion == 9){
    arObj();
}else if(opcion == 10){
    forObj();
}else if(opcion == 11){
    EachObj();
}else if(opcion == 12){
    MapObj();
}else if(opcion == 13){
    alert("Vuelve prontooo! ʕ•́ᴥ•̀ʔっ");
    console.clear();
}
}
