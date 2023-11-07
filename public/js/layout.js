document.getElementById("fotoSubir").addEventListener("change", function (event) {
    const imgElement = document.getElementById("dogPhoto");
    if (event.target.files.length > 0) {
      const newImageURL = URL.createObjectURL(event.target.files[0]);
      imgElement.src = newImageURL;
    } else {
      // Si el usuario selecciona un archivo y luego lo borra, puedes restablecer la imagen a la imagen anterior
      imgElement.src = dog.photo;
    }
  });
  