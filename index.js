//introduccion 
document.write('Nombre: Franco <br> Edad: 21');
//variables
let nombre = "Roberto";
let sueldo = 200000;
document.write("<br><br>Variables");
document.write("<br>", nombre, "<br>");
document.write(sueldo);

//entrada del teclado
function entrada() {
  let user = prompt("1-Ingresar su usuario");
  let email = prompt("2-Ingresar su email");
  let new_user = document.getElementById("usuario");
  let new_email = document.getElementById("email");
  new_user.innerText = user;
  new_email.innerText = email;
}

//1.realizar la carga  del lado  de un cuadrado
function fun_perimetro() {
  let lado = parseInt(prompt("Ingresa el valor del lado del cuadrado:"));
  let perimetro = lado * 4;
  document.getElementById('btnCalcular').textContent = `Perímetro: ${perimetro}`;
}

//2 escribir un programa en el cual se ingrese cuatro numeros
function fun_sum_pro() {
  let num1 = parseInt(prompt("Ingresa el primer número:"));
  let num2 = parseInt(prompt("Ingresa el segundo número:"));
  let num3 = parseInt(prompt("Ingresa el tercer número:"));
  let num4 = parseInt(prompt("Ingresa el cuarto número:"));
  let suma = num1 + num2;
  let producto = num3 * num4;

  document.getElementById('btnCalcular').textContent = `Suma: ${suma}, Producto: ${producto}`;
}
// 3 Realizar un programa que lea cuatro valores numéricos e informar 
function fun_sum_pro_v4() {
  let num1 = parseInt(prompt("Ingresa el primer número:"));
  let num2 = parseInt(prompt("Ingresa el segundo número:"));
  let num3 = parseInt(prompt("Ingresa el tercer número:"));
  let num4 = parseInt(prompt("Ingresa el cuarto número:"));
  let suma = num1 + num2 + num3 + num4;
  let producto = num1 * num2 * num3 * num4;

  document.getElementById('btnCalcular').textContent = `Suma: ${suma}, Producto: ${producto}`;
}
//4 Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que
function calcula_total_abonar() {
  let precio = parseInt(prompt("Ingresa el precio del artículo:"));
  let cantidad = parseInt(prompt("Ingresa la cantidad que lleva el cliente:"));
  let total = precio * cantidad;

  document.getElementById('btnCalcular').textContent = `Total a abonar: ${total}`;
}
//act 1  Estructuras condicionales simples.	

function prom() {
  let nota1 = parseInt(prompt("Ingresa la nota1:"));
  let nota2 = parseInt(prompt("Ingresa la nota2:"));
  let nota3 = parseInt(prompt("Ingresa la nota3:"));
  let suma = nota1 + nota2 + nota3;
  let promedio = suma / 3;

  if (promedio >= 7) {
    document.getElementById('btnCalcular').textContent = 'Promocionado';
  } else {
    document.getElementById('btnCalcular').textContent = `Promedio: ${promedio}`;
  }
}
//Estructuras condicionales compuestas.	
function realizarOperaciones() {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  let resultado = '';

  if (numero1 > numero2) {
    const suma = numero1 + numero2;
    const diferencia = numero1 - numero2;
    resultado = `La suma es: ${suma} y la diferencia es: ${diferencia}`;
  } else {
    const producto = numero1 * numero2;
    const division = numero1 / numero2;
    resultado = `El producto es: ${producto} y la división es: ${division}`;
  }

  document.getElementById('resultado').innerText = resultado;
}
//Estructuras condicionales compuestas.	


//Estructuras condicionales anidadas.	
function num_pos_3() {
  const numero = prompt("Ingresa un número entero positivo de hasta tres cifras:");
  const resultado = document.getElementById("resultado");
  if (numero !== null) {
    if (!isNaN(numero) && numero > 0 && numero < 1000) {
      const longitud = numero.length;
      resultado.textContent = `El número tiene ${longitud} cifra${longitud > 1 ? 's' : ''}.`;
      alert(resultado.textContent);
    } else {
      resultado.textContent = "Por favor, ingresa un número válido de hasta tres cifras.";
      alert(resultado.textContent);
    }
  }
}
//Estructuras condicionales anidadas.	

//operadores logicos &&
function menor_10() {
  const numero1 = prompt("Ingresa el primer número:");
  const numero2 = prompt("Ingresa el segundo número:");
  const numero3 = prompt("Ingresa el tercer número:");
  const resultado = document.getElementById("resultado");

  if (numero1 !== null && numero2 !== null && numero3 !== null) {
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) &&
      numero1 < 10 && numero2 < 10 && numero3 < 10) {
      resultado.textContent = "Todos los números son menores a diez";
      alert("Todos los números son menores a diez");
    } else {
      resultado.textContent = "Uno o más números son mayores o iguales a diez.";
      alert("Uno o más números son mayores o iguales a diez.");
    }
  }
}
//operadores logicos &&

//operadores logicos ||
function op_or() {
  const numero1 = prompt("Ingresa el primer número:");
  const numero2 = prompt("Ingresa el segundo número:");
  const numero3 = prompt("Ingresa el tercer número:");
  const resultado = document.getElementById("resultado");

  if (numero1 !== null && numero2 !== null && numero3 !== null) {
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) &&
      (numero1 < 10 || numero2 < 10 || numero3 < 10)) {
      resultado.textContent = "Alguno de los números es menor a diez.";
      alert("Alguno de los números es menor a diez.");
    } else {
      resultado.textContent = "Ninguno de los números es menor a diez.";
      alert("Ninguno de los números es menor a diez.");
    }
  }
}
//operadores logicos ||
//operador switch
function mostrarVentana() {
  const palabra = prompt("Ingrese una palabra (casa, mesa, perro, gato):");
  traducirPalabra(palabra.toLowerCase());
}

function traducirPalabra(palabra) {
  const traducciones = {
    casa: "house",
    mesa: "table",
    perro: "dog",
    gato: "cat"
  };

  const traduccion = traducciones[palabra];
  if (traduccion) {
    document.getElementById("resultado").textContent = `La traducción es: ${traduccion}`;
  } else {
    document.getElementById("resultado").textContent = "Palabra no encontrada en el diccionario.";
  }
}
//operador switch

//op while
function mostrarSerie() {
  let resultado = "";
  for (let i = 1; i <= 25; i++) {
    resultado += (11 * i) + " ";
  }
  alert("Serie: " + resultado.trim());
}

//op while

//acumulador
function calcularPromedio() {
  let alturas = [];
  for (let i = 0; i < 5; i++) {
    let altura = parseFloat(prompt("Ingrese la altura de la persona " + (i + 1) + " en metros:"));
    if (!isNaN(altura) && altura > 0) {
      alturas.push(altura);
    } else {
      alert("Ingrese un valor numérico válido.");
      i--; // Volver a pedir la altura si el input no es válido
    }
  }
  let suma = alturas.reduce((acum, actual) => acum + actual, 0);
  let promedio = suma / alturas.length;
  alert("La altura promedio es: " + promedio.toFixed(2) + " metros");
}

//acumulador

//dowhile
function acumularValores() {
  let acumulado = 0;
  let valor;

  do {
    valor = parseInt(prompt("Ingrese un valor (ingrese 9999 para finalizar):"));

    if (valor !== 9999) {
      if (!isNaN(valor)) {
        acumulado += valor;
      } else {
        alert("Ingrese un valor numérico válido.");
      }
    }
  } while (valor !== 9999);

  alert("El valor acumulado es: " + acumulado);

  if (acumulado > 0) {
    alert("El valor acumulado es mayor a cero.");
  } else if (acumulado < 0) {
    alert("El valor acumulado es menor a cero.");
  } else {
    alert("El valor acumulado es cero.");
  }
}

//dowhile
//for
function mostrarTabla() {
  let numero = parseInt(prompt("Ingrese un número del 1 al 10:"));

  if (!isNaN(numero) && numero >= 1 && numero <= 10) {
    let resultado = "Tabla de multiplicar del " + numero + ":\n";
    for (let i = 1; i <= 12; i++) {
      resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
  } else {
    alert("Ingrese un número válido entre 1 y 10.");
  }
}
//for
//funcion
function mostrarRango() {
  let menor = parseInt(prompt("Ingrese el primer número (menor):"));
  let mayor = parseInt(prompt("Ingrese el segundo número (mayor):"));

  if (!isNaN(menor) && !isNaN(mayor) && menor < mayor) {
    let resultado = "Números del " + menor + " al " + mayor + ":\n";
    for (let i = menor; i <= mayor; i++) {
      resultado += i + " ";
    }
    alert(resultado.trim());
  } else {
    alert("Asegúrese de ingresar dos números válidos, donde el primero sea menor que el segundo.");
  }
}
//funcion

//funcion retorno
function mostrarMenor(num1, num2, num3) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);

  const menor = Math.min(num1, num2, num3);

  document.getElementById('resultadoretor').innerText = `El menor de los tres números es: ${menor}`;
}


//funcion retorno

// estructuras secuenciales de programacion 

document.getElementById('cal_per').addEventListener('click', function () {
  let valorlado = prompt('Ingrese el lado del cuadrado en cm:');
  let producto = parseInt(valorlado) * 4;
  let resultado = 'Los lados del cuadrado miden ' + valorlado + ' cm<br>' +
    'El perímetro del cuadrado es ' + producto + ' cm';
  document.getElementById('resultado').innerHTML = resultado;
});

// estructuras secuenciales de programacion 

//Funciones que retorna un valor 1.
function fun_mayor() {
  let var1 = prompt("1-Ingrese el primer valor: ");
  let var2 = prompt("2-Ingrese el primer valor: ");
  let var3 = prompt("3-Ingrese el primer valor: ");
  let mayor = Math.max(var1, var2, var3);

  return document.getElementById("btnmax").textContent = `Maximo:${mayor}`;
  ;
}

//clase string
function cargar_nombre_fin() {
  let cont = 0;
  let fin = "FIN";
  let flag = true;

  while (flag) {
    let nombre = prompt("Ingrese su nombre: ");
    if (nombre.toUpperCase() === fin) {
      flag = false;
    } else {
      cont++;
    }
  }
  console.log("Se ingresaron " + cont + " nombres.");
}


//clase date
function mostrarCuatrimestre() {
  const fechaActual = new Date();
  const mes = fechaActual.getMonth() + 1; // getMonth() devuelve el mes entre 0 y 11, sumamos 1 para tener el valor de 1 a 12

  let cuatrimestre;

  if (mes >= 1 && mes <= 3) {
    cuatrimestre = 'Primer cuatrimestre (Enero - Marzo)';
  } else if (mes >= 4 && mes <= 6) {
    cuatrimestre = 'Segundo cuatrimestre (Abril - Junio)';
  } else if (mes >= 7 && mes <= 9) {
    cuatrimestre = 'Tercer cuatrimestre (Julio - Septiembre)';
  } else {
    cuatrimestre = 'Cuarto cuatrimestre (Octubre - Diciembre)';
  }

  document.getElementById('resultado_dia').innerText = `Estamos en el ${cuatrimestre}.`;
}
//clase date

//clase array
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function operarConVector() {
  const vector = [];
  for (let i = 0; i < 8; i++) {
    vector.push(generarNumeroAleatorio(1, 100)); // Genera números aleatorios entre 1 y 100
  }

  let acumuladoTotal = 0;
  let acumuladoMayores36 = 0;
  let cantidadMayores50 = 0;

  for (let i = 0; i < vector.length; i++) {
    acumuladoTotal += vector[i];

    if (vector[i] > 36) {
      acumuladoMayores36 += vector[i];
    }

    if (vector[i] > 50) {
      cantidadMayores50++;
    }
  }

  const resultado = `
      Vector generado: [${vector.join(', ')}] <br>
      Valor acumulado de todos los elementos: ${acumuladoTotal} <br>
      Valor acumulado de los elementos mayores a 36: ${acumuladoMayores36} <br>
      Cantidad de valores mayores a 50: ${cantidadMayores50}
  `;

  document.getElementById('resultado_vec').innerHTML = resultado;
}
//clase array

//clase math 
function elevarTerceraPotencia() {
  const numero = parseFloat(document.getElementById('numero').value);

  if (!isNaN(numero)) {
    const resultado = Math.pow(numero, 3); // Eleva el número a la tercera potencia utilizando Math.pow()
    document.getElementById('resultado_3pot').innerText = `El valor de ${numero} elevado a la tercera potencia es: ${resultado}`;
  } else {
    document.getElementById('resultado_3pot').innerText = "Por favor, ingrese un número válido.";
  }
}
//clase math 

//formulario y eventos 
function mostrarMensaje(numero) {
  document.getElementById('resultado_form').innerText = `Has presionado el botón ${numero}`;
}
//formulario y eventos

//Controles FORM, BUTTON y TEXT.	
function elevarAlCubo() {
  const numero = parseInt(document.getElementById('numero_form').value);

  if (!isNaN(numero)) {
    const resultado = Math.pow(numero, 3); // Elevar el número a la tercera potencia
    alert(`El valor de ${numero} elevado al cubo es: ${resultado}`);
  } else {
    alert("Por favor, ingrese un número válido.");
  }
}
//Controles FORM, BUTTON y TEXT.	

//for password
function validarContraseñas() {
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;

  if (password1 === password2) {
    document.getElementById('resultado_pass').innerText = "Las contraseñas son iguales.";
  } else {
    document.getElementById('resultado_pass').innerText = "Las contraseñas no coinciden.";
  }
}
//for password

//select 
function mostrarPrecio() {
  const select = document.getElementById('pizzaSelect');
  const precioInput = document.getElementById('precio');
  const seleccion = select.value;

  let precio;

  // Asignamos el precio según la opción seleccionada
  if (seleccion == "1") {
    precio = "$8.00"; // Precio para Jamón y Queso
  } else if (seleccion == "2") {
    precio = "$10.00"; // Precio para Muzzarella
  } else if (seleccion == "3") {
    precio = "$9.00"; // Precio para Morrones
  } else {
    precio = ""; // Si no se seleccionó ninguna pizza
  }

  // Mostramos el precio en el campo de texto
  precioInput.value = precio;
}
//select 

//checkbox
function mostrarDeportes() {
  const deportesSeleccionados = [];

  // Obtener los checkboxes seleccionados
  const checkboxes = document.querySelectorAll('input[name="deportes"]:checked');

  // Recorrer los checkboxes seleccionados y agregar sus valores al arreglo
  checkboxes.forEach(function (checkbox) {
    deportesSeleccionados.push(checkbox.value);
  });

  // Mostrar los deportes seleccionados en el párrafo
  if (deportesSeleccionados.length > 0) {
    document.getElementById('resultado_check').innerText = `Deportes seleccionados: ${deportesSeleccionados.join(', ')}`;
  } else {
    document.getElementById('resultado_check').innerText = "No has seleccionado ningún deporte.";
  }
}
//checkbox

//radio
function validarEdad() {
  const mayor18 = document.getElementById('mayor18');
  const menor18 = document.getElementById('menor18');

  if (mayor18.checked) {
    alert("Puedes ingresar al sitio.");
  } else if (menor18.checked) {
    alert("No puedes ingresar al sitio.");
  } else {
    alert("Por favor, selecciona una opción.");
  }
}
//radio

//textarea
function mostrarDatos() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const comentarios = document.getElementById('comentarios').value;

  // Mostrar los datos en un alert
  alert(`Nombre: ${nombre}\nCorreo Electrónico: ${email}\nComentarios: ${comentarios}`);
}
//textarea

//blur
function resaltarCampo(campo) {
  document.getElementById(campo).style.backgroundColor = "#e0e0e0"; // Resaltar campo al hacer focus
}

function normalizarCampo(campo) {
  document.getElementById(campo).style.backgroundColor = ""; // Volver al color original al hacer blur
}

function validarClave() {
  const clave = document.getElementById('clave').value;

  if (clave.length < 7 || clave.length > 20) {
    alert("La clave debe tener entre 7 y 20 caracteres.");
  }
}

function enviarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const clave = document.getElementById('clave').value;

  // Aquí puedes procesar el formulario o enviar los datos
  alert(`Nombre: ${nombre}\nClave: ${clave}`);
}
//blur

//mouse
function cambiarColor(elemento) {
  elemento.style.backgroundColor = "#d3d3d3";
}
function restaurarColor(elemento) {
  elemento.style.backgroundColor = "";
}
//mouse 

//onload
function mostrarMensaje() {
  alert("¡La página se ha cargado correctamente!");
}
//onload

//window
function abrirVentana() {
  // Usando window.open para abrir una nueva ventana
  window.open("https://www.example.com", "_blank", "width=600,height=300");
}
//window


//redirecionar
function redireccionar() {
  let num;
  num = Math.random() * 3;
  num = parseInt(num);
  if (num == 0) {
    window.location = 'https://www.google.com';
  }
  if (num == 1) {
    window.location = 'https://www.youtube.com';
  }
  if (num == 2) {
    window.location = 'https://www.gmail.com';
  }
}
//redirecionar

//screen
function abrirVentana() {
  var ventana = open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight / 2);
}
//screen

//verificar
function verificar() {
  if (navigator.cookieEnabled == true) {
    alert('Acceso a cookies activadas');
  } else {
    alert('No se encuentran activadas las cookies en este navegador');
  }
}


//Programación orientada a objetos en JavaScript.

class Suma {
  constructor() {
    this.valor1 = 0;
    this.valor2 = 0;
  }

  cargarValor1(valor) {
    this.valor1 = valor;
  }

  cargarValor2(valor) {
    this.valor2 = valor;
  }

  retornarResultado() {
    return this.valor1 + this.valor2;
  }
}

let s = new Suma();

s.cargarValor1(10);
s.cargarValor2(20);

document.write('<br>La suma de los dos valores es: ' + s.retornarResultado());
//Programación orientada a objetos en JavaScript.


//varias clases
class Persona_varias {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Empresa {
  constructor(edadTope) {
    this.edadTope = edadTope;
  }

  verificarEdad(persona) {
    return persona.edad > this.edadTope;
  }
}

let p1 = new Persona_varias("Juan", 35);
let p2 = new Persona_varias("Maria", 65);
let p3 = new Persona_varias("Pedro", 45);

let empresa = new Empresa(60);

let inhabilitadas = 0;
let personas = [p1, p2, p3];

for (let persona of personas) {
  if (empresa.verificarEdad(persona)) {
    inhabilitadas++;
  }
}

document.write("<br>Cantidad de personas inhabilitadas para ingresar como trabajadores: " + inhabilitadas);
//varias clases



//Vectores con componentes de tipo objeto.
class Persona_vectores {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let personasVectores = [
  new Persona_vectores("Juan", 35),
  new Persona_vectores("Maria", 60),
  new Persona_vectores("Pedro", 60),
  new Persona_vectores("Ana", 40)
];
let maxEdad = Math.max(...personasVectores.map(persona => persona.edad));
let personasMaxEdad = personasVectores.filter(persona => persona.edad === maxEdad);
console.log("La persona de mayor edad es: " + personasMaxEdad[0].nombre);
if (personasMaxEdad.length > 1) {
  console.log("Hay más de una persona con la misma edad mayor.");
}
//vectores con objetos





//Creación de objetos literales
const jugador = {
  nombre: "Nombre del Jugador",
  puntos: 0,

  imprimir() {
    console.log(`Jugador: ${this.nombre}, Puntos: ${this.puntos}`);
  },

  aumentarPuntos(cantidad) {
    this.puntos += cantidad;
  },

  verificarSiGano() {
    if (this.puntos > 1000) {
      console.log("¡Felicidades, has ganado!");
    }
  }
};
//Creación de objetos literales




//Array: Diferentes formas de crearlos
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

console.log("Días de la semana:", diasSemana);
console.log("Meses del año:", meses);
//Array: Diferentes formas de crearlos





//Array: Densos
const randomVector = Array.from({ length: 10 }, () => Math.floor(Math.random() * 500) + 1);
const menores250 = vector.filter(num => num < 250);
const mayoresOiguales250 = vector.filter(num => num >= 250);

console.log("Vector original:", randomVector);
console.log("Vector menores a 250:", menores250);
console.log("Tamaño del vector menores a 250:", menores250.length);
console.log("Vector mayores o iguales a 250:", mayoresOiguales250);
console.log("Tamaño del vector mayores o iguales a 250:", mayoresOiguales250.length);

//Array: Densos




//Array: No densos o dispersos
const premios = new Array(1000).fill(null);

const montosPremios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
for (let i = 0; i < 10; i++) {
  let posicion;
  do {
    posicion = Math.floor(Math.random() * 1000);
  } while (premios[posicion] !== null);
  premios[posicion] = montosPremios[i];
}

console.log("Números con premio y montos:");
premios.forEach((monto, indice) => {
  if (monto !== null) {
    console.log(`Número: ${indice}, Monto: ${monto}`);
  }
});
//Array: No densos o dispersos




//Array: Métodos push y pop
const vector = Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000) + 1);

const ultimoElemento = vector.pop();
const penultimoElemento = vector.pop();
const sumaUltimos = ultimoElemento + penultimoElemento;

console.log("Vector inicial:", vector);
console.log("Últimos elementos extraídos y sumados:", ultimoElemento, "+", penultimoElemento, "=", sumaUltimos);
console.log("Tamaño final del vector:", vector.length);
//Array: Métodos push y pop




//Array: Métodos sort y reverse
const sueldos = [];
function cargarSueldos() {
  let sueldo;
  do {
    sueldo = parseFloat(prompt("Ingrese el sueldo del empleado (0 para finalizar):"));
    if (sueldo !== 0) {
      sueldos.push(sueldo);
    }
  } while (sueldo !== 0);

  sueldos.sort((a, b) => b - a);

  console.log("Sueldos ordenados de mayor a menor:", sueldos);
}
//Array: Métodos sort y reverse

//Array: método splice
let array = [1, 2, 3, 4, 5, 2, 6];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 2) {
    array.splice(i, 1, 1, 1);
    i += 1;
  }
}
console.log(array);

//Array: método splice

//Array: método join
let personasjoin = ["Ana", "Luis", "Carlos", "Marta", "Jose"];
let resultado = personasjoin.join("<br>");
document.getElementById("result").innerHTML = resultado;

//Array: método join


//Array: método toString
let array10 = Array.from({ length: 10 }, (_, i) => i + 1);
let toStringResult = array10.toString();
let joinResult = array10.join();
console.log("toString:", toStringResult);
console.log("join:", joinResult);
if (toStringResult === joinResult) {
  console.log("Los métodos toString y join devuelven el mismo valor.");
}
//Array: método toString


// Funciones: objeto arguments
function maxNumber() {
  let max = -Infinity;
  for (let num of arguments) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(maxNumber(3, 7, 1, 9, 5)); // Ejemplo de uso
// Funciones: objeto arguments


//Funciones: anidadas
// Función principal con una función anidada
function outerFunction(param) {
  let localVar = "Variable local";
  function innerFunction(innerParam) {
    console.log("Parámetro de outerFunction:", param);
    console.log("Parámetro de innerFunction:", innerParam);
    console.log("Valor de localVar:", localVar);
  }
  innerFunction("Parámetro interno");
}
outerFunction("Parámetro externo");

//Funciones: anidadas

//Funciones setInterval, clearInterval, setTimeout y clearTimeout



//Funciones setInterval, clearInterval, setTimeout y clearTimeout


//Operador condicional ?:
function calcularSueldo(sueldoBruto) {
  let descuento = sueldoBruto > 10000 ? 0.1 : 0.05;
  return sueldoBruto * (1 - descuento);
}
console.log(calcularSueldo(12000));
//Operador condicional ?:


//Expresiones regulares: cuantificadores o repeticiones {x}, {x,y}, {x,}
function validarNumero(numero) {
  let regex = /^\d{3}\.\d{2}$/;
  return regex.test(numero);
}
console.log(validarNumero("123.45"));

//Expresiones regulares: cuantificadores o repeticiones {x}, {x,y}, {x,}