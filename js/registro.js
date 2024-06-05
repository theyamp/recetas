document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores del nombre, apellido y fecha de nacimiento
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value.trim();
  
    // Dividir el nombre en nombres y apellidos
    var partesNombre = nombre.split(" ");
    var primerNombre = partesNombre[0];
    var segundoNombre = (partesNombre.length > 1) ? partesNombre[1] : partesNombre[0]; // Si solo hay un nombre, repetirlo
    var partesApellido = apellido.split(" ");
    var primerApellido = partesApellido[0];
    var segundoApellido = (partesApellido.length > 1) ? partesApellido[1] : partesApellido[0]; // Si solo hay un apellido, repetirlo
  
    // Extraer las dos primeras letras del primer nombre, segundo nombre, primer apellido y segundo apellido
    var nombreIniciales = primerNombre.charAt(0).toLowerCase() + segundoNombre.charAt(0).toLowerCase();
    var apellidoIniciales = primerApellido.charAt(0).toLowerCase() + segundoApellido.charAt(0).toLowerCase();
  
    // Extraer los dos últimos dígitos del año de nacimiento
    var anioNacimiento = new Date(fechaNacimiento).getFullYear().toString().substr(-2);
  
    // Generar la dirección de correo electrónico de Gmail en base a las iniciales del nombre y el año de nacimiento
    var correoGmail = nombreIniciales + apellidoIniciales + anioNacimiento + "@" + "gmail.com";
  
    // Mostrar la dirección de correo electrónico generada
    document.getElementById("correo-gmail").innerText = "Tu dirección de correo electrónico de Gmail es: " + correoGmail;
  });