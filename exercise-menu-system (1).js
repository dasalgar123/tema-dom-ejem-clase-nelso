const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exercises = [
  { id: 1, name: "Verificar si un número es par o impar" },
  { id: 2, name: "Determinar si un estudiante ha aprobado un examen" },
  { id: 3, name: "Clasificar una calificación en A, B, C, D o F" },
  { id: 4, name: "Determinar si un número es positivo, negativo o cero" },
  { id: 5, name: "Calcular el índice de masa corporal (IMC)" },
  { id: 6, name: "Clasificar un triángulo según sus lados" },
  { id: 7, name: "Calcular descuento en una tienda" },
  { id: 8, name: "Calcular descuento según cantidad comprada" },
  { id: 9, name: "Simular la creación de una factura" },
  { id: 10, name: "Simular el funcionamiento de un ascensor" },
  { id: 11, name: "Simular un ascensor con límite de peso" },
  { id: 12, name: "Simular un sensor de temperatura ambiente" },
  { id: 13, name: "Simular un sensor de temperatura con umbral de alerta" },
  { id: 14, name: "Combinar simulaciones de ascensor y temperatura" },
  { id: 15, name: "Calculadora con operadores aritméticos" },
  { id: 16, name: "Categorías de edad" },
  { id: 17, name: "Clasificar productos y aplicar descuentos" },
  { id: 18, name: "Asistente de nutricionista (IMC)" },
  { id: 19, name: "Asistente virtual para un cine" },
  { id: 20, name: "Sistema de clasificación para campeonato deportivo" },
  { id: 21, name: "Menú de restaurante con descuentos" },
  { id: 22, name: "Imprimir números del 0 al número ingresado" },
  { id: 23, name: "Calcular sumatoria y promedio de un rango de números" },
  { id: 24, name: "Calcular factorial de un número" },
  { id: 25, name: "Mostrar años cumplidos" },
  { id: 26, name: "Mostrar tabla de multiplicar del 1 al 10" },
  { id: 27, name: "Sumar lista de números ingresados" },
  { id: 28, name: "Simular proceso de ventas en una tienda" },
  { id: 29, name: "Simular registro de vehículos en un parqueadero" },
  { id: 30, name: "Simular carrito de compras en tienda virtual" },
];

function displayMenu() {
  console.log("\n=== Menú de Ejercicios ===");
  exercises.forEach(exercise => {
    console.log(`${exercise.id}. ${exercise.name}`);
  });
  console.log("0. Salir");
}

function executeExercise(id) {
  switch (id) {
    case 1:
      rl.question("Ingrese un número: ", (num) => {
        const result = parseInt(num) % 2 === 0 ? "par" : "impar";
        console.log(`El número ${num} es ${result}.`);
        mainMenu();
      });
      break;
    case 2:
      rl.question("Ingrese la calificación del estudiante: ", (grade) => {
        const passed = parseInt(grade) >= 60 ? "aprobado" : "reprobado";
        console.log(`El estudiante ha ${passed} el examen.`);
        mainMenu();
      });
      break;
    case 3:
      rl.question("Ingrese la calificación (0-100): ", (grade) => {
        const numGrade = parseInt(grade);
        let letter;
        if (numGrade >= 90) letter = 'A';
        else if (numGrade >= 80) letter = 'B';
        else if (numGrade >= 70) letter = 'C';
        else if (numGrade >= 60) letter = 'D';
        else letter = 'F';
        console.log(`La calificación ${numGrade} corresponde a: ${letter}`);
        mainMenu();
      });
      break;
    case 4:
      rl.question("Ingrese un número: ", (num) => {
        const number = parseFloat(num);
        if (number > 0) console.log("El número es positivo.");
        else if (number < 0) console.log("El número es negativo.");
        else console.log("El número es cero.");
        mainMenu();
      });
      break;
    case 5:
      rl.question("Ingrese su peso en kg: ", (weight) => {
        rl.question("Ingrese su altura en metros: ", (height) => {
          const imc = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
          let categoria;
          if (imc < 18.5) categoria = "Bajo peso";
          else if (imc < 25) categoria = "Peso normal";
          else if (imc < 30) categoria = "Sobrepeso";
          else categoria = "Obesidad";
          console.log(`Su IMC es ${imc.toFixed(2)}. Categoría: ${categoria}`);
          mainMenu();
        });
      });
      break;
    case 6:
      rl.question("Ingrese el primer lado del triángulo: ", (lado1) => {
        rl.question("Ingrese el segundo lado del triángulo: ", (lado2) => {
          rl.question("Ingrese el tercer lado del triángulo: ", (lado3) => {
            const l1 = parseFloat(lado1);
            const l2 = parseFloat(lado2);
            const l3 = parseFloat(lado3);
            let tipo;
            if (l1 === l2 && l2 === l3) tipo = "equilátero";
            else if (l1 === l2 || l2 === l3 || l1 === l3) tipo = "isósceles";
            else tipo = "escaleno";
            console.log(`El triángulo es ${tipo}.`);
            mainMenu();
          });
        });
      });
      break;
    case 7:
      rl.question("Ingrese el monto total de compra: ", (monto) => {
        const total = parseFloat(monto);
        let descuento = 0;
        if (total >= 1000) descuento = 0.1;
        else if (total >= 500) descuento = 0.05;
        const montoFinal = total * (1 - descuento);
        console.log(`Monto total: $${total.toFixed(2)}`);
        console.log(`Descuento aplicado: ${(descuento * 100).toFixed(0)}%`);
        console.log(`Monto final: $${montoFinal.toFixed(2)}`);
        mainMenu();
      });
      break;
    case 8:
      rl.question("Ingrese el precio del producto: ", (precio) => {
        rl.question("Ingrese la cantidad comprada: ", (cantidad) => {
          const precioUnitario = parseFloat(precio);
          const cantidadComprada = parseInt(cantidad);
          const precioTotal = precioUnitario * cantidadComprada;
          let descuento = 0;
          if (cantidadComprada >= 10) descuento = 0.1;
          else if (cantidadComprada >= 5) descuento = 0.05;
          const precioFinal = precioTotal * (1 - descuento);
          console.log(`Precio total: $${precioTotal.toFixed(2)}`);
          console.log(`Descuento aplicado: ${(descuento * 100).toFixed(0)}%`);
          console.log(`Precio final: $${precioFinal.toFixed(2)}`);
          mainMenu();
        });
      });
      break;
    case 9:
      let cliente, producto, cantidad, precioUnitario, esEstudiante, tipoCliente;
      rl.question("Nombre del cliente: ", (nombre) => {
        cliente = nombre;
        rl.question("Producto: ", (prod) => {
          producto = prod;
          rl.question("Cantidad: ", (cant) => {
            cantidad = parseInt(cant);
            rl.question("Precio unitario: ", (precio) => {
              precioUnitario = parseFloat(precio);
              rl.question("¿Es estudiante? (s/n): ", (estudiante) => {
                esEstudiante = estudiante.toLowerCase() === 's';
                rl.question("Tipo de cliente (A, B, C): ", (tipo) => {
                  tipoCliente = tipo.toUpperCase();
                  const subtotal = cantidad * precioUnitario;
                  const impuesto = esEstudiante ? subtotal * 0.05 : subtotal * 0.13;
                  const total = subtotal + impuesto;
                  console.log("\n=== FACTURA ===");
                  console.log(`Cliente: ${cliente}`);
                  console.log(`Producto: ${producto}`);
                  console.log(`Cantidad: ${cantidad}`);
                  console.log(`Precio unitario: $${precioUnitario.toFixed(2)}`);
                  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
                  console.log(`Impuesto: $${impuesto.toFixed(2)}`);
                  console.log(`Total: $${total.toFixed(2)}`);
                  console.log(`Tipo de cliente: ${tipoCliente}`);
                  mainMenu();
                });
              });
            });
          });
        });
      });
      break;
    case 10:
      rl.question("Ingrese el piso deseado (1-10): ", (piso) => {
        const pisoDeseado = parseInt(piso);
        if (pisoDeseado >= 1 && pisoDeseado <= 10) {
          console.log(`El ascensor se está moviendo al piso ${pisoDeseado}.`);
        } else {
          console.log("Piso inválido. Por favor, seleccione un piso entre 1 y 10.");
        }
        mainMenu();
      });
      break;
    case 11:
      const LIMITE_PESO = 300; // kg
      rl.question("Ingrese su peso en kg: ", (peso) => {
        rl.question("Ingrese el piso deseado (1-10): ", (piso) => {
          const pesoUsuario = parseFloat(peso);
          const pisoDeseado = parseInt(piso);
          if (pesoUsuario <= LIMITE_PESO && pisoDeseado >= 1 && pisoDeseado <= 10) {
            console.log(`El ascensor se está moviendo al piso ${pisoDeseado}.`);
          } else if (pesoUsuario > LIMITE_PESO) {
            console.log("El ascensor está sobrecargado. Por favor, reduzca el peso.");
          } else {
            console.log("Piso inválido. Por favor, seleccione un piso entre 1 y 10.");
          }
          mainMenu();
        });
      });
      break;
    case 12:
      const TEMP_MIN = 18;
      const TEMP_MAX = 25;
      rl.question("Ingrese la temperatura actual en °C: ", (temp) => {
        const temperatura = parseFloat(temp);
        if (temperatura >= TEMP_MIN && temperatura <= TEMP_MAX) {
          console.log("La temperatura es adecuada.");
        } else {
          console.log("La temperatura está fuera del rango deseado.");
        }
        mainMenu();
      });
      break;
    case 13:
      const UMBRAL_ALERTA = 30;
      rl.question("Ingrese la temperatura actual en °C: ", (temp) => {
        const temperatura = parseFloat(temp);
        if (temperatura > UMBRAL_ALERTA) {
          console.log("¡ALERTA! La temperatura está por encima del umbral.");
        } else {
          console.log("La temperatura es normal.");
        }
        mainMenu();
      });
      break;
    case 14:
      const TEMP_MIN_ASCENSOR = 18;
      const TEMP_MAX_ASCENSOR = 25;
      rl.question("Ingrese la temperatura actual en °C: ", (temp) => {
        const temperatura = parseFloat(temp);
        if (temperatura >= TEMP_MIN_ASCENSOR && temperatura <= TEMP_MAX_ASCENSOR) {
          rl.question("Ingrese el piso deseado (1-10): ", (piso) => {
            const pisoDeseado = parseInt(piso);
            if (pisoDeseado >= 1 && pisoDeseado <= 10) {
              console.log(`El ascensor se está moviendo al piso ${pisoDeseado}.`);
            } else {
              console.log("Piso inválido. Por favor, seleccione un piso entre 1 y 10.");
            }
            mainMenu();
          });
        } else {
          console.log("La temperatura no es adecuada. El ascensor no puede moverse.");
          mainMenu();
        }
      });
      break;
    case 15:
      rl.question("Ingrese el primer número: ", (num1) => {
        rl.question("Ingrese el segundo número: ", (num2) => {
          rl.question("Ingrese el operador (+, -, *, /): ", (op) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let resultado;
            switch (op) {
              case '+': resultado = a + b; break;
              case '-': resultado = a - b; break;
              case '*': resultado = a * b; break;
              case '/': resultado = b !== 0 ? a / b : "Error: División por cero"; break;
              default: resultado = "Operador inválido";
            }
            console.log(`Resultado: ${resultado}`);
            mainMenu();
          });
        });
      });
      break;
    case 16:
      rl.question("Ingrese su edad: ", (edad) => {
        const edadNum = parseInt(edad);
        let categoria;
        if (edadNum < 12) categoria = "niño";
        else if (edadNum < 18) categoria = "adolescente";
        else if (edadNum < 60) categoria = "adulto";
        else categoria = "adulto mayor";
        console.log(`Usted es un ${categoria}.`);
        mainMenu();
      });
      break;
    case 17:
      rl.question("Ingrese el tipo