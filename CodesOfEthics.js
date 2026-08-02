document.addEventListener('DOMContentLoaded', () => {
    const btnCompromiso = document.getElementById('btnCompromiso');

    if (btnCompromiso) {
        btnCompromiso.addEventListener('click', () => {
            alert('¡Compromiso ético validado con éxito! Registrado para el portafolio profesional de Ingeniería en Software.');
            btnCompromiso.textContent = '¡Compromiso Registrado ✓!';
            btnCompromiso.style.backgroundColor = '#10b981';
            btnCompromiso.disabled = true;
        });
    }
});