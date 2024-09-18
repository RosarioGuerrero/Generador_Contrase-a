let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let mensaje = document.getElementById("mensaje");
let resultado = document.getElementById("resultado");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?";

// Función para generar una contraseña
function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        return; // Salir de la función si el número es menor a 8
    }

    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    console.log("Contraseña generada:", password); // Mostrar contraseña generada
    evaluarContrasena(password); // Llamar a evaluarContrasena para mostrar el resultado
}

// Función para limpiar los campos
function limpiar() {
    cantidad.value = "";
    contrasena.value = "";
    mensaje.textContent = "";
    resultado.textContent = "";
}

// Función para verificar si la contraseña es segura
function esContrasenaSegura(contrasena) {
    const esLarga = contrasena.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(contrasena);

    console.log("Longitud >= 8:", esLarga);
    console.log("Contiene mayúscula:", tieneMayuscula);
    console.log("Contiene minúscula:", tieneMinuscula);
    console.log("Contiene número:", tieneNumero);
    console.log("Contiene carácter especial:", tieneCaracterEspecial);

    return esLarga && tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial;
}

// Función para evaluar y mostrar si la contraseña es segura
function evaluarContrasena(password) {
    const resultadoDiv = document.getElementById("resultado");
    const resultadoTexto = esContrasenaSegura(password) ? "La contraseña es segura." : "La contraseña no es segura.";
    resultadoDiv.textContent = resultadoTexto; // Mostrar el resultado
}

