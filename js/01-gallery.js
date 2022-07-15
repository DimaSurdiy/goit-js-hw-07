import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainerEl.addEventListener('click', onGalleryClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          /></a>
        </div>
        `;
    })
    .join('');
}

function onGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const originalImage = evt.target.dataset.source;
  const lightbox = basicLightbox.create(`<img src="${originalImage}">`);

  showOriginalGalleryImage(lightbox);

  window.addEventListener('keydown', onEscapeKeydown);

  function onEscapeKeydown(e) {
    if (e.code === 'Escape') {
      lightbox.close();
      window.removeEventListener('keydown', onEscapeKeydown);
    }
  }
}

function showOriginalGalleryImage(lightbox) {
  lightbox.show();
}
