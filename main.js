
            //Booleanos
const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2 
const booleanoOr  = booleano1 || booleano2 
const booleanoNot  =  !booleano1
const booleanoMix0   = (booleano1 || booleano2)  && (booleano1 || (!booleano1&& !booleano2))

            //Operadores

const valorDivision = 17/3
console.log(valorDivision.toFixed(2));

const valorResto =17%7
console.log(valorResto);

            //Lógica de programación
//Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string con el número 9. Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”. ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?


const A = 9 
const B = "9"

if (A == B) {
    console.log('Son iguales');
}
if (A !== B) {
    console.log('No iguales');
}

//Crea una variable mochila que sea un array de elementos. Desarrolla la lógica para que: a) si mochila tiene más de 10 elementos, muestre por consola el mensaje “No puedo cargar con tantas cosas”; b) si mochila contiene entre 10 y 2 elementos, se muestre por consola “Qué bien voy con mi mochila”, y, si no,  muestre por consola “Creo q no necesito una mochila”.
const mochila = [1,2,3,4,5,6,7,8]

if (mochila.length>10) {
    console.log('No puedo cargar con tantas cosas');
} else if(mochila.length <= 10 && mochila.length >= 2 ){
    console.log('Qué bien voy con mi mochila');
} else {
    console.log('Creo que no necesito mochila');}

//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.
let contarHasta10 = 0

while (contarHasta10 !== 10) {
    contarHasta10++
    console.log(contarHasta10);
}

//Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario en el que si diaFestivo es true devuelva un console.log de ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.

const diaFestivo = true

const trabajo = diaFestivo=== true ? 'Hoy no trabajo' :'Hoy trabajo' 
console.log(trabajo);

//Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.
const arrayBucle = []

// for (let x = 4; x >=4 && x<=18; x++) {
//     arrayBucle.push(x)
    
// }
let x=0
while (x<=18) {
    if (x >=4 && x<=18) {
        arrayBucle.push(x)
    }
    x++
}
console.log(arrayBucle);
let resultado = 0
// Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.
for (let i = 0; i < arrayBucle.length; i++) {
    let sumando = arrayBucle[i];
    resultado = sumando + resultado
}
console.log(resultado);

// Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle for of y muestra por consola todos sus elementos. Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.
const array1 = ['Con', 'Sofia', 'aprendiendo', 'bucles']

for (const rta of array1) {
    console.log(rta);
}
for (let key in array1) {
    // console.log(key);
    console.log(array1[key])
    }

// Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.
let z = 0
while (z<=20) {
    console.log(z)
    if (z % 3 == 0 && z!=0) {
        console.log("patata");
    }
    z++
}

//EXTRAS
//Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];
//Crea un array con la gente cuyo nombre tiene 4 letras sin utilizar el método filter de los arrays y muéstralo por consola.
const nombre4Letras = []

for (let h = 0; h < gente.length; h++) {
    if (gente[h].nombre.length == 4) {
        nombre4Letras.push(gente[h].nombre)
    }
}
console.log(nombre4Letras);

// Crea un array con la gente cuyo nombre empieza por J y sean menores de 40 años sin utilizar el método filter de los arrays y muéstralo por consola
const empiezaConJyMenor40 = []
for (let h = 0; h < gente.length; h++) {
    if (gente[h].nombre[0] == "J" && gente[h].edad< 40) {
        empiezaConJyMenor40.push(gente[h].nombre)
    }
}
console.log(empiezaConJyMenor40);

//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':

// TEST 1
let ordenador = {

}
if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 2
ordenador.marca = "La pava" 

  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 3

  ordenador.tipo = "portátil"
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 4
ordenador.perifericos= ['mouse', 'touchPad']
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 5
ordenador.almacenamiento= {discos:['SSD', 'HDD']}

  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 6
ordenador.almacenamiento= {discos:['SSD', 'HDD'], maestro: 0}
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

//Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes':
// TEST 1
const arr = [{
    name: "pepito",
    age:25

}, {
    name: "pepito",
    age:20

},{
    name: "Juan",
    age:2
}]

if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4


  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5

  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6

  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 7

  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 8

  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9

  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 10

  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
