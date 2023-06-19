import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join(" ");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const largeImageUrl = event.target.dataset.source;

    const modal = basicLightbox.create(`
    <img src="${largeImageUrl}" alt="" width='800' height= '600' />`);
    modal.show();
  }
});
