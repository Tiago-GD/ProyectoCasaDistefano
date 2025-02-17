// document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita que la página se recargue

//     // Obtener los datos del formulario
//     const formData = new FormData(this);

//     // Enviar los datos a Formspree usando fetch
//     fetch("https://formspree.io/f/xblrnaqn", {
//         method: "POST",
//         body: formData,
//         headers: {
//             Accept: "application/json",
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//                 // Mostrar mensaje de confirmación
//                 document.getElementById("mensaje-confirmacion").style.display = "block";

//                 // Limpiar el formulario
//                 this.reset();
//             } else {
//                 alert("Hubo un problema al enviar el formulario. Inténtalo de nuevo.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error al enviar el formulario:", error);
//             alert("Hubo un error inesperado. Inténtalo más tarde.");
//         });
// });

// // Función para detectar el tamaño de la pantalla y aplicar cambios
// function ajustarHeader() {
//     // Obtén el ancho de la ventana
//     const anchoPantalla = window.innerWidth;
  
//     // Si el ancho es mayor a 768px (o el tamaño que prefieras)
//     if (anchoPantalla < 768) {
//       // Solo activa el efecto de desplazamiento para pantallas grandes
//       window.onscroll = function() {
//         if (window.scrollY > 50) {
//           document.body.classList.add('scrolled');
//         } else {
//           document.body.classList.remove('scrolled');
//         }
//       };
  
//       // Cambia los valores para pantallas grandes
//       document.body.classList.add('pantalla-grande');
//     } else {
//       // Elimina la funcionalidad de desplazamiento para pantallas pequeñas
//       window.onscroll = null;
  
//       // Cambia los valores para pantallas pequeñas
//       document.body.classList.remove('pantalla-grande');
//     }
//   }
  
//   // Llama a la función cuando la página se cargue y cuando cambie el tamaño de la ventana
//   window.onload = ajustarHeader;
//   window.onresize = ajustarHeader;
  
  
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el formulario está presente en la página antes de ejecutar el código
  let formulario = document.getElementById("formulario-contacto");
  
  if (formulario) {
      formulario.addEventListener("submit", function (event) {
          event.preventDefault(); // Evita que la página se recargue

          // Obtener los datos del formulario
          const formData = new FormData(this);

          // Enviar los datos a Formspree usando fetch
          fetch("https://formspree.io/f/xwpvwpkg", {
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
  }

  // Ejecutar la función para ajustar el header solo si la navbar está presente
  ajustarHeader();
  window.onresize = ajustarHeader;
});

// Función para detectar el tamaño de la pantalla y aplicar cambios
function ajustarHeader() {
  // Obtén el ancho de la ventana
  const anchoPantalla = window.innerWidth;

  // Si el ancho es mayor a 768px (o el tamaño que prefieras)
  if (anchoPantalla < 768) {
      // Solo activa el efecto de desplazamiento para pantallas grandes
      window.onscroll = function () {
          if (window.scrollY > 50) {
              document.body.classList.add('scrolled');
          } else {
              document.body.classList.remove('scrolled');
          }
      };

      // Cambia los valores para pantallas grandes
      document.body.classList.add('pantalla-grande');
  } else {
      // Elimina la funcionalidad de desplazamiento para pantallas pequeñas
      window.onscroll = null;

      // Cambia los valores para pantallas pequeñas
      document.body.classList.remove('pantalla-grande');
  }
}
