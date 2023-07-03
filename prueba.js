// Obtener referencia al botón de recuperar contraseña
var forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

// Obtener referencia a los formularios de inicio de sesión y recuperar contraseña
var loginForm = document.getElementById("login");
var forgotPasswordForm = document.getElementById("forgotPassword");

// Agregar evento de clic al botón de recuperar contraseña
forgotPasswordBtn.addEventListener("click", function() {
  // Ocultar formulario de inicio de sesión
  loginForm.style.display = "none";
  
  // Mostrar formulario de recuperar contraseña
  forgotPasswordForm.style.display = "block";
});
