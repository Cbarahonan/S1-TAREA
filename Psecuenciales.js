//Procesos Secuenciales
//Isaac Barahona
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Elija el ejercicio que desea ejecutar:');
console.log('1. Pedir al usuario su nombre y saludarlo.');
console.log('2. Pedir dos palabras y presentarlas concatenadas.');
console.log('3. Solicitar al usuario dos números y mostrar su suma.');
console.log('4. Pedir al usuario un número y mostrar su doble.');
console.log('5. Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.');
console.log('6. Pedir al usuario dos números y mostrar el resultado de multiplicarlos.');
console.log('7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.');
console.log('8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.');
console.log('9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.');
console.log('10. Pedir al usuario dos números y mostrar el mayor.');
console.log('11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.');
console.log('12. Pedir 5 números y asignarlos en un arreglo.');
console.log('13. Dado un arreglo de 5 nombres, presentarlos todos.');
console.log('14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el último.');
console.log('15. Dado un arreglo de 5 elementos, cambiar los valores del primer y último elemento entre sí.');

rl.question('Ingrese el número del ejercicio que desea ejecutar: ', (opcion) => {
  switch (opcion) {
    case '1':
//1.	Pedir al usuario su nombre y saludarlo.

rl.question('Por favor, ingrese su  nombre: ', (nombre) => {
 if (nombre){
  console.log(`hola,${nombre}`);
 }else
 {
  console.log("No registraste el nombre");
 }
  rl.close();
});
break;
case '2':
//2.	Pedir dos palabras y presentarlas concatenadas

console.log('Ingrese dos palabras');
rl.question('Palabra 1:',(palabra1)=>{
  rl.question('Palabra 2:',(palabra2)=>{
    const concatenadas= palabra1 + " " + palabra2;
    console.log('palabras concatenadas',concatenadas);
rl.close();
});
});
break;
case '3':
//3.	Solicitar al usuario dos números y mostrar su suma.

console.log('Ingrese dos numeros');
rl. question('Numero 1:',(num1)=>{
  num1=parseFloat(num1);
  rl.question('Numero 2:',(num2)=>{
    num2=parseFloat(num2);
    const suma=num1 + num2;
    console.log(`La suma es ${suma}`);
    rl.close();
  });
});
break;
case '4':
//4.	Pedir al usuario un número y mostrar su doble.

console.log('Ingrese un numero');
rl. question('Numero 1:',(num1)=>{
  num1=parseFloat(num1);
    const doble=num1 * 2;
    console.log(`El doble es ${doble}`);
    rl.close();
});
break;
case '5':
//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.

console.log('Ingrese su edad ');
rl. question('Su edad:',(edad)=>{
  edad=parseFloat(edad);
    const ager=edad + 1;
    console.log(`Usted el siguiente año tendra: ${ager} años`);
    rl.close();
});

break;
case '6':
//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.

console.log('Ingrese dos numeros');
rl. question('Numero 1:',(num1)=>{
  num1=parseFloat(num1);
  rl.question('Numero 2:',(num2)=>{
    num2=parseFloat(num2);
    const prod=num1 * num2;
    console.log(`La multiplicacion es ${prod}`);
    rl.close();
  });
});

break;
case '7':
//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
rl.question('Por favor, ingresa la temperatura en grados Celsius: ', (celsius) => {
  // Convertir la temperatura de Celsius a Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;

  // Mostrar la temperatura en grados Fahrenheit
  console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);

  rl.close(); 
});

break;
case '8':
//8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
rl.question('Por favor, ingresa tu nombre: ', (nombre) => {
  // Mostrar el nombre tres veces usando un bucle for
  for (let i = 0; i < 3; i++) {
    console.log(nombre);
  }

  rl.close();
});

break;
case '9':
//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
rl.question('Por favor, ingresa un número: ', (numero) => {
  // Convertir la entrada del usuario a un número entero
  numero = parseInt(numero);

  // Mostrar la tabla de multiplicar del número ingresado
  console.log(`Tabla de multiplicar de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

  rl.close();
});
break;
case '10':
//10.	Pedir al usuario dos números y mostrar el mayor.
rl.question('Por favor, ingresa el primer número: ', (numero1) => {
  rl.question('Por favor, ingresa el segundo número: ', (numero2) => {
    // Convertir las entradas del usuario a números enteros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // Determinar el mayor de los dos números
    let mayor;
    if (numero1 > numero2) {
      mayor = numero1;
    } else {
      mayor = numero2;
    }

    // Mostrar el mayor de los dos números
    console.log(`El número mayor es: ${mayor}`);

    rl.close(); // Cerrar la interfaz de lectura
  });
});

break;
case '11':
//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.

rl.question('Por favor, ingresa la distancia en metros: ', (metros) => {
  // Convertir la distancia de metros a centímetros
  const centimetros = metros * 100;

  // Mostrar la distancia en centímetros
  console.log(`La distancia en centímetros es: ${centimetros} cm`);

  rl.close(); // Cerrar la interfaz de lectura
});

break;
case '12':
//12.	Pedir 5 números y asignarlos en un arreglo
let numeros = [];

rl.question('Por favor, ingresa el primer número: ', (num1) => {
  numeros.push(parseFloat(num1));

  rl.question('Por favor, ingresa el segundo número: ', (num2) => {
    numeros.push(parseFloat(num2));

    rl.question('Por favor, ingresa el tercer número: ', (num3) => {
      numeros.push(parseFloat(num3));

      rl.question('Por favor, ingresa el cuarto número: ', (num4) => {
        numeros.push(parseFloat(num4));

        rl.question('Por favor, ingresa el quinto número: ', (num5) => {
          numeros.push(parseFloat(num5));

          console.log('Los números ingresados son:', numeros);
          rl.close();
        });
      });
    });
  });
});

break;
case '13':
//13.	Dado un arreglo de 5 nombres presentarlos todos
const nombres = ['Juan', 'María', 'Carlos', 'Ana', 'Pedro'];

// Mostrar todos los nombres
console.log('Los nombres son:');
nombres.forEach((nombre, indice) => {
  console.log(`${indice + 1}. ${nombre}`);
  rl.close();
});

break;
case '14':
// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el último
const elementos = ['A', 'B', 'C', 'D', 'E'];

// Presentar el primer, el del medio y el último elemento
console.log('Primer elemento:', elementos[0]);
console.log('Elemento del medio:', elementos[Math.floor(elementos.length / 2)]);
console.log('Último elemento:', elementos[elementos.length - 1]);

rl.close();

break;
case '15':
// 15. Dado un arreglo de 5 elementos, cambiar los valores del primer y último elemento entre sí
let elemento = ['A', 'B', 'C', 'D', 'E'];

// Intercambiar los valores del primer y último elemento
let temp = elemento[0];
elemento[0] = elemento[elemento.length - 1];
elemento[elemento.length - 1] = temp;

// Mostrar el arreglo después del intercambio
console.log('Arreglo después del intercambio:', elemento);

rl.close();
break;
}
});