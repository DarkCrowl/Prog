document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculation-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);

        const diferencia = numero2 - numero1;

        let mensaje;
        if (diferencia > 0) {
            mensaje = `Has tenido una ganancia de ${diferencia}.`;
        } else if (diferencia < 0) {
            mensaje = `Has tenido una pérdida de ${Math.abs(diferencia)}.`;
        } else {
            mensaje = 'No hubo ni ganancia ni pérdida.';
        }

        resultDiv.textContent = mensaje;
    });
});
