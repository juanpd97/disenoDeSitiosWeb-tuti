document.addEventListener('DOMContentLoaded', function() {
    var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    var tooltipInstances = new bootstrap.Tooltip(tooltips);
  });
 
function validarFormulario() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaNacimiento > fechaActual || edad < 18) {
      // Mostrar el tooltip con el mensaje de error automáticamente
      const tooltip = new bootstrap.Tooltip(document.getElementById('fechaNacimiento'));
      tooltip.show();
      return false; // Evitar que el formulario se envíe
    }

    return true; // Permitir el envío del formulario
  }