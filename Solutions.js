// Agreguen un MÍNIMO de 6 autos al stock.
// El desafío será crear las siguientes funciones:
//   A) Una función que imprima en consola la cantidad de autos en stock.
//   B) Una función que imprima cuántos autos de cada marca hay en stock. (Ejemplo: “2 chevrolet, 4 ford, 2 fiat”).
//   C) Una función que devuelva qué auto es el mas nuevo y cuál es el mas viejo.
//   D) Una función que devuelva qué auto es el que tiene mas colores disponibles.

class Auto {
  constructor(marca, modelo, anio, colores, stock) {
    this.marca = marca
    this.modelo = modelo
    this.año = anio
    this.colores = colores
    this.stock = stock
  }
}

let tesla = new Auto("Tesla", "Alpha", 2021, ["Plateado"], 22);
let honda = new Auto("Honda", "Beta", 2068, ["Plateado", "Negro"], 13);
let volskwagen = new Auto("Volskwagen", "Beta", 2021, ["Negro", "Azul", "Gris"], 54);
let ford = new Auto("Ford", "Gamma", 2050, ["Azul", "Rojo", "Blanco", "Plateado"], 1);
let fiat = new Auto("Fiat", "Omega", 2025, ["Plateado", "Amarillo", "Amarillo"], 25);
let chevrolet = new Auto("Chevrolet", "Alpha", 2020, ["Negro"], 3);

let totalAutos = [tesla, honda, volskwagen, ford, fiat, chevrolet]

//FUNCION STOCK TOTAL
let totalStock = function () {
  let acumuladorStock = 0
  for (i = 0; i < totalAutos.length; i++) {
    acumuladorStock += totalAutos[i].stock
  }
  console.log(`El stock total es ${acumuladorStock}`)
}

// totalStock()

//FUNCION STOCK INDIVIDUAL()

let singleStock = function () {
  for (i = 0; i < totalAutos.length; i++) {
    console.log(`El stock de ${totalAutos[i].marca} es ${totalAutos[i].stock}`)
  }
}

// singleStock()

//FUNCION EDADES()

let autosEdad = function () {
  let edadMayor = totalAutos[0].año
  let nombreMayor = totalAutos[0].marca
  let edadMenor = totalAutos[0].año
  let nombreMenor = totalAutos[0].marca


  for (i = 0; i < totalAutos.length; i++) {
    if (totalAutos[i].año > edadMayor) {
      edadMayor = totalAutos[i].año
      nombreMayor = totalAutos[i].marca

    } else if (edadMenor > totalAutos[i].año) {
      edadMenor = totalAutos[i].año
      nombreMenor = totalAutos[i].marca
    }
  }
  console.log(`El auto de mayor edad es ${nombreMayor} del ${edadMayor}`)
  console.log(`El auto de menor edad es ${nombreMenor} del ${edadMenor}`)
}

// autosEdad()
let mayColores = Object.keys(totalAutos[0].colores)
let nombre = totalAutos[0].marca
//FUNCION AUTO CON MAS COLORES
let ColorCheck = function () {
  for (i = 0; i < totalAutos.length; i++) {
    if (Object.keys(totalAutos[i].colores) > mayColores) {
      mayColores = Object.keys(totalAutos[i].colores)
      nombre = totalAutos[i].marca
    }
  }
  console.log(`El auto con mas colores disponibles es ${nombre}`)
}

// ColorCheck()
