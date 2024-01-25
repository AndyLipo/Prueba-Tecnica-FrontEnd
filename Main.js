function mostrarDatosUsuario() {
    // Lógica para obtener datos del formulario de usuario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Lógica para mostrar datos en el contenedor
    const datosContainer = document.getElementById('datosContainer');
    datosContainer.innerHTML = `<p>Nombre: ${nombre}</p>
                                <p>Apellido: ${apellido}</p>
                                <p>Teléfono: ${telefono}</p>
                                <p>Fecha de Nacimiento: ${fechaNacimiento}</p>`;
  }

  function mostrarDatosPDF() {
    // Lógica para obtener datos del formulario de PDF
    const tituloPDF = document.getElementById('tituloPDF').value;
    const archivoPDF = document.getElementById('archivoPDF').files[0];

    // Lógica para mostrar datos en el contenedor
    const datosContainer = document.getElementById('datosContainer');
    datosContainer.innerHTML = `<p>Título PDF: ${tituloPDF}</p>
                                <p>Archivo PDF: ${archivoPDF.name}</p>
                                <a href="${URL.createObjectURL(archivoPDF)}" download>Descargar PDF</a>`;
  }

  function mostrarDatosImagen() {
    // Lógica para obtener datos del formulario de imagen
    const tituloImagen = document.getElementById('tituloImagen').value;
    const imagen = document.getElementById('imagen').files[0];

    // Lógica para mostrar datos en el contenedor
    const datosContainer = document.getElementById('datosContainer');
    datosContainer.innerHTML = `<p>Título Imagen: ${tituloImagen}</p>
                                <img src="${URL.createObjectURL(imagen)}" alt="Imagen" style="max-width: 500px;">
                                <a href="${URL.createObjectURL(imagen)}" download>Descargar Imagen</a>`;
  }


  let currentIndex = 0;
  const images = document.querySelectorAll('.carruselImage');
  const carruselContainer = document.getElementById('carruselContainer');

  function startCarrusel() {
    setInterval(() => {
      if (!carruselContainer.matches(':hover')) {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarrusel();
      }
    }, 2000); // Cambia de imagen cada 2 segundos
  }

  function updateCarrusel() {
    images.forEach((image, index) => {
      const width = index === currentIndex ? '500px' : '150px';
      image.style.width = width;
    });
  }

  carruselContainer.addEventListener('mouseenter', () => clearInterval(startCarrusel));
  carruselContainer.addEventListener('mouseleave', startCarrusel);

  startCarrusel();