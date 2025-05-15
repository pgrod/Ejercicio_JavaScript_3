function calcularConversion() {
    const km = parseFloat(document.getElementById('km').value);
    const m = parseFloat(document.getElementById('m').value);
    const ft = parseFloat(document.getElementById('ft').value);
    const yarda = parseFloat(document.getElementById('yarda').value);

let resultados = [];

if((isNaN(km) || km < 0) && (isNaN(m) || m < 0) && (isNaN(ft) || ft < 0) && (isNaN(yarda) || yarda < 0)){
    Swal.fire({
        icon:'error',
        title:'Datos Invalidos',
        text:'Por favor, ingresa un valor valido y mayor o igual a 0',
    });
    return;
}

if (!isNaN(km) && km >= 0) {
    resultados.push(`${km} km = ${km * 1000} metros`);
  }

  if (!isNaN(m) && m >= 0) {
    resultados.push(`${m} m = ${m * 100} centímetros`);
  }

  if (!isNaN(ft) && ft >= 0) {
    resultados.push(`${ft} pies = ${ft * 12} pulgadas`);
  }

  if (!isNaN(yarda) && yarda >= 0) {
    resultados.push(`${yarda} yardas = ${yarda * 36} pulgadas`);
  }

  Swal.fire({
    icon: 'Success',
    title: 'Resultado',
    html: resultados.join('<br>'),
  });
  }

  function limpiarFormulario() {
    document.getElementById('conversionForm').requestFullscreen();
    Swal.fire({
        icon:'info',
        title:'',
        text:'',
    });
  }
