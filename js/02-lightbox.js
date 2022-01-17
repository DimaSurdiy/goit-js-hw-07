import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

createGalleryItemsMarkup();

galleryEl.addEventListener('click', onGalleryItemsClick);

function createGalleryItemsMarkup() {
  const galleryItemsMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>
    `;
    })
    .join('');

  galleryEl.innerHTML = galleryItemsMarkup;
}

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  var lightbox = new SimpleLightbox('.gallery a');
}
