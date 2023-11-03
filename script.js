const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
const email = document.getElementById('email')
const mensaje = document.getElementById('mensaje')

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres. <br>`;
    valido = false;
  } if (email.value.length == 0){
    warnings += `Debes Ingresar un Correo electronico. <br>`;
    valido = false;
  } if (mensaje.value.length == 0) {
    warnings += `Debes  ingresar un mensaje. <br>`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});