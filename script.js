document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Enviar los datos a Formspree usando fetch
    fetch("https://formspree.io/f/xblrnaqn", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                // Mostrar mensaje de confirmación
                document.getElementById("mensaje-confirmacion").style.display = "block";

                // Limpiar el formulario
                this.reset();
            } else {
                alert("Hubo un problema al enviar el formulario. Inténtalo de nuevo.");
            }
        })
        .catch((error) => {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error inesperado. Inténtalo más tarde.");
        });
});
