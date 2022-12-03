const btn = document.getElementById('button');
const form = document.getElementById('form');

// Uso de la librería de EmailJS
form.addEventListener('submit', function(e) {
    e.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_fjna4ka';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar📩';
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Mensaje enviado!',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,

                customClass: {
                    title:'success__title',
                }
            });
            form.reset();
        }, (err) => {
            btn.value = 'Enviar📩';
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Algo ha ocurrido, por favor, intenta de nuevo...',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,

                customClass: {
                    title:'success__title',
                }
            });
        });
});