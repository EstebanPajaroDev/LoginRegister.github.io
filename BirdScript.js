// Variables de los elementos del formulario
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

// Función para manejar el registro
function registro(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Validación de campos vacíos
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    error();
    return;
  }

  // Validación de contraseñas
  if (password.value !== confirmPassword.value) {
    incorrecta();
    return;
  } else if (password.value.length <= 6) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Tu contraseña es muy corta, debe tener más de 6 caracteres",
      footer:
        '<a href="https://www.lastpass.com/es/features/password-generator">¿Porque sucede esto?</a>',
    });
  } else {
    agregado();
  }

  // Si pasa todas las validaciones, se agrega al localStorage
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}

// Añadir el evento de submit al formulario
document.getElementById("registro-form").addEventListener("submit", registro);
