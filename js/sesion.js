document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de entrada del nombre de usuario y la contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verificar si el nombre de usuario tiene un formato de dirección de correo electrónico de Gmail
    if (username.endsWith("@gmail.com")) {
      // Si la dirección de correo electrónico es de Gmail, se considera un inicio de sesión válido
      // Aquí podrías hacer una verificación de contraseña adicional si es necesario
      window.location.href = "index.html"; // Reemplaza "pagina-secreta.html" con la URL de la página deseada
    } else {
      // Si el nombre de usuario no es un correo electrónico de Gmail, mostrar un mensaje de error
      document.getElementById("error-msg").innerText = "El usuario debe ser una dirección de correo electrónico de Gmail.";
    }
  });