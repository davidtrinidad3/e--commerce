export default document.addEventListener("DOMContentLoaded", function() {
    const btnIniciarSesion = document.getElementById("btnIniciarSesion");
    const loginForm = document.getElementById("loginForm");

    btnIniciarSesion.addEventListener("click", function() {
        // Validar el correo y la contraseña aquí
        const correo = document.getElementById("correo").value;
        const contraseña = document.getElementById("contraseña").value;

        // Ejemplo de validación (compara con un correo y contraseña predefinidos)
        if (correo === "email" && contraseña === "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#\$%^&*_=+\-]).{6,12}$") {
            loginForm.submit(); // Enviar el formulario si la validación es correcta
        } else {
            alert("Correo o contraseña incorrectos"); // Mostrar un mensaje de error
        }
    });
});
