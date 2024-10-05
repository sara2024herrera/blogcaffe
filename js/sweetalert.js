// Seleccionamos el botón y los campos del formulario
const enviarBtn = document.getElementById('enviar-btn');
const form = document.getElementById('form-contacto');

// Añadimos un evento al botón para mostrar el SweetAlert
enviarBtn.addEventListener('click', function() {
    // Configuración de SweetAlert2
    Swal.fire({
        title: 'Información enviada',
        text: 'Tu mensaje ha sido enviado correctamente.',
        icon: 'success',
        timer: 3000, // Modal se cierra automáticamente después de 3 segundos
        showConfirmButton: false // No mostrar el botón de confirmación
    });

    // Limpiamos los campos del formulario
    form.reset();
});
