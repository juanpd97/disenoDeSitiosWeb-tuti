// ------------------------ validar fecha nacimiento ----------------------

document.addEventListener('DOMContentLoaded', function() {
    var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    var tooltipInstances = new bootstrap.Tooltip(tooltips);
  });
 
function validarFormulario() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaNacimiento > fechaActual || edad < 18) {

      const tooltip = new bootstrap.Tooltip(document.getElementById('fechaNacimiento'));
      tooltip.show();
      return false;
    }

    return true;
  }

//   ---------------------  recuperar contrasena ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const enlaceRecuperarContrasena = document.getElementById('recuperarContrasena');
    const formularioIniciarSesion = document.getElementById('formulario-iniciarSesion');
    const formularioRecuperarContrasena = document.getElementById('formulario-recuperarContrasena');

    enlaceRecuperarContrasena.addEventListener('click', function(event) {
      event.preventDefault();

      
      formularioIniciarSesion.classList.add('d-none');
      formularioRecuperarContrasena.classList.remove('d-none');
    });
  });

//   --------------- volver --------------
document.addEventListener('DOMContentLoaded', function() {
    const enlacevolver = document.getElementById('volverIniciarSesion');
    const formularioIniciarSesion = document.getElementById('formulario-iniciarSesion');
    const formularioRecuperarContrasena = document.getElementById('formulario-recuperarContrasena');

    enlacevolver.addEventListener('click', function(event) {
      event.preventDefault();

      formularioIniciarSesion.classList.remove('d-none');
      formularioRecuperarContrasena.classList.add('d-none');
    });
  });


//   ---------- volver a reproducir video ----------

document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoBanner');

    videoPlayer.addEventListener('ended', function() {
      videoPlayer.currentTime = 0; 
      videoPlayer.play();
    });
  });
