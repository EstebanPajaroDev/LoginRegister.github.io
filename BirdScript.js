// Función para manejar el registro
function registro(event) {
  // Variables de los elementos del formulario
  let usuario = document.getElementById("username");
  let correo = document.getElementById("email");
  let contrasena = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");
  event.preventDefault(); // Evita el envío automático del formulario

  // Validación de campos vacíos
  if (
    usuario.value === "" ||
    correo.value === "" ||
    contrasena.value === "" ||
    confirmPassword.value === ""
  ) {
    error(); // Asumo que esta función muestra algún mensaje de error
    return;
  }

  // Validación de contraseñas
  if (contrasena.value !== confirmPassword.value) {
    incorrecta(); // Asumo que esta función muestra un mensaje de error
    return;
  } else if (contrasena.value.length <= 6) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Tu contraseña es muy corta, debe tener más de 6 caracteres",
      footer:
        '<a href="https://www.lastpass.com/es/features/password-generator">¿Por qué sucede esto?</a>',
    });
    return;
  }

  // Si pasa todas las validaciones, se agrega al localStorage
  localStorage.setItem("username", usuario.value);
  localStorage.setItem("email", correo.value);
  localStorage.setItem("password", contrasena.value);

  // Resetear los valores del formulario
  usuario.value = "";
  correo.value = "";
  contrasena.value = "";
  confirmPassword.value = "";

  agregado(); // Asumo que esta función muestra un mensaje de éxito
}

// Añadir el evento de submit al formulario de registro
document.getElementById("registro-form").addEventListener("submit", registro);

// Variables para inicio de sesión
let usernameLogin = document.getElementById("nombreLogin");
let emailLogin = document.getElementById("correoLogin");
let passwordLogin = document.getElementById("passwordLogin");

let nombreDeUsuario = localStorage.getItem("username");
let correoStorage = localStorage.getItem("email");
let clave = localStorage.getItem("password");

// Función para manejar el inicio de sesión
function inicioDeSesion(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Validación de campos vacíos
  if (
    usernameLogin.value === "" ||
    emailLogin.value === "" ||
    passwordLogin.value === ""
  ) {
    errorUser();
    return;
  }

  // Validación de usuario y correo
  if (usernameLogin.value !== nombreDeUsuario) {
    errorUser();
    return;
  }
  if (emailLogin.value !== correoStorage) {
    correoIncorrecto();
    return;
  }

  // Validación de contraseñas
  if (passwordLogin.value !== clave) {
    claveIncorrecta();
    return;
  }

  bienvenido();

  // Resetear los valores del formulario
  usernameLogin.value = "";
  emailLogin.value = "";
  passwordLogin.value = "";
}

// Añadir el evento de submit al formulario de inicio de sesión
document
  .getElementById("iniciarSesion-form")
  .addEventListener("submit", inicioDeSesion);
