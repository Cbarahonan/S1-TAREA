//Procesos Secuenciales
//Isaac Barahona
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mayorOmenor() {
  rl.question("Ingrese un número: ", (num) => {
    num = parseFloat(num);
    if (num === 10) {
      console.log("El número", num, "es igual a la base.");
    } else if (num > 10) {
      console.log("El número", num, "es mayor que 10.");
    } else {
      console.log("El número", num, "es menor que 10.");
    }
    rl.close();
  });
}

function mayordeedad() {
  rl.question("Ingrese su edad: ", (edad) => {
    edad = parseInt(edad);
    if (edad >= 18) {
      console.log("Usted es mayor de edad.");
    } else {
      console.log("Usted es menor de edad.");
    }
    rl.close();
  });
}

function ParOimpar() {
  rl.question("Ingrese un número: ", (num) => {
    num = parseInt(num);
    if (num % 2 === 0) {
      console.log("El número", num, "es par.");
    } else {
      console.log("El número", num, "es impar.");
    }
    rl.close();
  });
}

function psOng() {
  rl.question("Ingrese un número aleatorio: ", (num) => {
    num = parseFloat(num);
    if (num >= 0) {
      console.log("El número", num, "es positivo.");
    } else {
      console.log("El número", num, "es negativo.");
    }
    rl.close();
  });
}

function igualesOno() {
  rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      if (num1 === num2) {
        console.log("Los números ingresados son iguales.");
      } else {
        console.log("Los números ingresados son diferentes.");
      }
      rl.close();
    });
  });
}

function caracter() {
  rl.question("Ingrese un carácter: ", (caracter) => {
    if ("aeiouAEIOU".includes(caracter)) {
      console.log("El carácter ingresado es una vocal.");
    } else {
      console.log("El carácter ingresado es una consonante.");
    }
    rl.close();
  });
}

function nombresIguales() {
  rl.question("Ingrese el primer nombre: ", (nom1) => {
    rl.question("Ingrese el segundo nombre: ", (nom2) => {
      if (nom1 === nom2) {
        console.log("Los nombres ingresados son iguales.");
      } else if (nom1 > nom2) {
        console.log(nom1, "es mayor que", nom2);
      } else {
        console.log(nom1, "es menor que", nom2);
      }
      rl.close();
    });
  });
}

function Multiplo3() {
  rl.question("Ingrese un número: ", (num) => {
    num = parseInt(num);
    if (num % 3 === 0) {
      console.log("El número", num, "es múltiplo de 3.");
    } else {
      console.log("El número", num, "no es múltiplo de 3.");
    }
    rl.close();
  });
}

function divisible2() {
  rl.question("Ingrese un número: ", (num) => {
    num = parseInt(num);
    if (num % 2 === 0) {
      console.log("El número", num, "es divisible por 2.");
    } else {
      console.log("El número", num, "no es divisible por 2.");
    }
    rl.close();
  });
}

function igual100() {
  rl.question("Ingrese un número: ", (num1) => {
    num1 = parseFloat(num1);
    if (num1 === 100) {
      console.log(num1, "es igual a 100.");
    } else if (num1 > 100) {
      console.log(num1, "es mayor que 100.");
    } else {
      console.log(num1, "es menor que 100.");
    }
    rl.close();
  });
}

function mayorMenorIgualCero() {
  rl.question("Ingrese un número: ", (num) => {
    num = parseFloat(num);
    if (num === 0) {
      console.log("El número ingresado es igual a cero.");
    } else if (num > 0) {
      console.log("El número ingresado es mayor que cero.");
    } else {
      console.log("El número ingresado es menor que cero.");
    }
    rl.close();
  });
}

function total() {
  rl.question("Ingrese el valor total de la factura: ", (monto) => {
    rl.question("Ingrese el porcentaje de IVA aplicado: ", (iva) => {
      monto = parseFloat(monto);
      iva = parseFloat(iva) / 100;
      let totalPagar = monto * (1 + iva);
      console.log("El monto total a pagar incluyendo el IVA es:", totalPagar);
      rl.close();
    });
  });
}

function multiplo5() {
  rl.question("Ingrese un número: ", (num) => {
    num = parseFloat(num);
    if (num % 5 === 0) {
      console.log("El número", num, "es múltiplo de 5.");
    } else {
      console.log("El número", num, "no es múltiplo de 5.");
    }
    rl.close();
  });
}

function aprobar() {
  rl.question("Ingrese su calificación en el examen: ", (nota) => {
    nota = parseFloat(nota);
    if (nota >= 60) {
      console.log("Usted ha aprobado el examen con una calificación de", nota, ".");
    } else {
      console.log("Usted ha reprobado el examen con una calificación de", nota, ".");
    }
    rl.close();
  });
}

function vehiculo() {
  rl.question("Ingrese el precio de venta del vehículo: ", (precioVenta) => {
    rl.question("Ingrese el año de fabricación del vehículo: ", (anoFabricacion) => {
      precioVenta = parseFloat(precioVenta);
      anoFabricacion = parseInt(anoFabricacion);
      if (anoFabricacion < 2010) {
        let descuento = precioVenta * 0.10;
        let precioFinal = precioVenta - descuento;
        console.log("El precio final con descuento es:", precioFinal.toFixed(2));
      } else {
        console.log("El precio final sin descuento es:", precioVenta.toFixed(2));
      }
      rl.close();
    });
  });
}

function sueldo() {
  rl.question("Ingrese su sueldo mensual: ", (sueldo) => {
    sueldo = parseFloat(sueldo);
    let sueldoAnual = sueldo * 12;
    let impuesto = 0;
    if (sueldoAnual > 30000) {
      impuesto = (sueldoAnual - 30000) * 0.15;
    }
    let sueldoNetoAnual = sueldoAnual - impuesto;
    console.log("Su sueldo neto anual es:", sueldoNetoAnual.toFixed(2));
    rl.close();
  });
}

function precioBanano() {
  rl.question("Ingrese el tipo de banano (A o B): ", (tipo) => {
    rl.question("Ingrese el tamaño del banano (1 o 2): ", (tamaño) => {
      tipo = tipo.toUpperCase();
      tamaño = parseInt(tamaño);
      let precioInicial = 0;
      switch (tipo) {
        case 'A':
          precioInicial = 10;
          if (tamaño === 1) {
            precioInicial += 2;
          } else if (tamaño === 2) {
            precioInicial += 3;
          }
          break;
        case 'B':
          precioInicial = 10;
          if (tamaño === 1) {
            precioInicial -= 3;
          } else if (tamaño === 2) {
            precioInicial -= 5;
          }
          break;
        default:
          console.log("Tipo de banano no válido.");
          break;
      }
      console.log("El precio final del banano es:", precioInicial.toFixed(2));
      rl.close();
    });
  });
}

function presupuestoBanquetes() {
  rl.question("Ingrese el número de personas para el evento: ", (numPersonas) => {
    numPersonas = parseInt(numPersonas);
    let costoPorPersona;
    if (numPersonas <= 100) {
      costoPorPersona = 20;
    } else if (numPersonas <= 200) {
      costoPorPersona = 15;
    } else {
      costoPorPersona = 10;
    }
    let costoTotal = numPersonas * costoPorPersona;
    let iva = costoTotal * 0.15;
    let presupuestoTotal = costoTotal + iva;
    console.log("El presupuesto total para el evento es:", presupuestoTotal.toFixed(2));
    rl.close();
  });
}

function primerElementoMayor() {
  rl.question("Ingrese el primer número: ", (primerNumero) => {
    rl.question("Ingrese el último número: ", (ultimoNumero) => {
      primerNumero = parseFloat(primerNumero);
      ultimoNumero = parseFloat(ultimoNumero);
      if (primerNumero > ultimoNumero) {
        console.log("El primer elemento es mayor que el último elemento.");
      } else {
        console.log("El primer elemento no es mayor que el último elemento.");
      }
      rl.close();
    });
  });
}

function primerUltimoParImpar() {
  rl.question("Ingrese el primer número: ", (primerNumero) => {
    rl.question("Ingrese el último número: ", (ultimoNumero) => {
      primerNumero = parseInt(primerNumero);
      ultimoNumero = parseInt(ultimoNumero);
      if (primerNumero % 2 === 0) {
        console.log("El primer elemento es par.");
      } else {
        console.log("El primer elemento no es par.");
      }
      if (ultimoNumero % 2 !== 0) {
        console.log("El último elemento es impar.");
      } else {
        console.log("El último elemento no es impar.");
      }
      rl.close();
    });
  });
}

function mayorElemento() {
  rl.question("Ingrese tres números separados por comas: ", (input) => {
    let numeros = input.split(",").map(num => parseFloat(num));
    let mayor = Math.max(...numeros);
    console.log("El mayor elemento del arreglo es:", mayor);
    rl.close();
  });
}

function sumaArreglo() {
  rl.question("Ingrese cinco números separados por comas: ", (input) => {
    let numeros = input.split(",").map(num => parseFloat(num));
    let suma = numeros.reduce((acc, curr) => acc + curr, 0);
    console.log("La suma de los elementos del arreglo es:", suma);
    rl.close();
  });
}

function ejecutarOpcion(opcion) {
  switch (opcion) {
    case '1':
      mayorOmenor();
      break;
    case '2':
      mayordeedad();
      break;
    case '3':
      ParOimpar();
      break;
    case '4':
      psOng();
      break;
    case '5':
      igualesOno();
      break;
    case '6':
      caracter();
      break;
    case '7':
      nombresIguales();
      break;
    case '8':
      Multiplo3();
      break;
    case '9':
      divisible2();
      break;
    case '10':
      igual100();
      break;
    case '11':
      mayorMenorIgualCero();
      break;
    case '12':
      total();
      break;
    case '13':
      multiplo5();
      break;
    case '14':
      aprobar();
      break;
    case '15':
      vehiculo();
      break;
    case '16':
      sueldo();
      break;
    case '17':
      precioBanano();
      break;
    case '18':
      presupuestoBanquetes();
      break;
    case '19':
      primerElementoMayor();
      break;
    case '20':
      primerUltimoParImpar();
      break;
    case '21':
      mayorElemento();
      break;
    case '22':
      sumaArreglo();
      break;
    default:
      console.log("Opción no válida.");
      rl.close();
      break;
  }
}

rl.question("Ingrese el número de la opción que desea ejecutar: ", (opcion) => {
  ejecutarOpcion(opcion);
});