// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  window.preloaded = new Array();

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Preload large images.
      let newImageSrc  = thumbnail.dataset.largeVersion;
      let largeVersion = new Image();
      largeVersion.src = newImageSrc;
      preloaded.push(largeVersion);

      // Set clicked image as main image.
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      // Change which image is current.
      const currentClass = "current";
      document.querySelector(`.${currentClass}`).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}

