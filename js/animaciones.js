// Seleccionamos los elementos h2 y p
const h2 = document.querySelector('.animated-h2');
const p = document.querySelector('.animated-p');

// Función para reiniciar la animación
function restartAnimation(element, className) {
    element.classList.remove(className); // Quitamos la clase de animación
    void element.offsetWidth; // Forzamos el reflow
    element.classList.add(className); // Volvemos a añadir la clase de animación
}

// Creamos un Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si el h2 vuelve a estar visible, reiniciamos la animación
            if (entry.target === h2) {
                restartAnimation(h2, 'animated-h2');
            }
            // Si el p vuelve a estar visible, reiniciamos la animación
            if (entry.target === p) {
                restartAnimation(p, 'animated-p');
            }
        } else {
            // Si el h2 o el p salen del viewport, los ocultamos
            if (entry.target === h2) {
                h2.style.opacity = 0;
            }
            if (entry.target === p) {
                p.style.opacity = 0;
            }
        }
    });
});

// Observamos ambos elementos (h2 y p)
observer.observe(h2);
observer.observe(p);



