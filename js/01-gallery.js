import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

createGalleryItemsMarkup();

galleryEl.addEventListener('click', onGalleryItemsClick);

function createGalleryItemsMarkup() {
  const galleryItemsMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `;
    })
    .join('');

  galleryEl.innerHTML = galleryItemsMarkup;
}

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (evt.currentTarget === evt.target) {
    return;
  }

  const galleryItem = evt.target;

  const galleryItemModal = basicLightbox.create(`
      <img src="${galleryItem.dataset.source}" alt="${galleryItem.alt}"/>
    `);
  galleryItemModal.show();

  const isGalleryItemModalVisible = galleryItemModal.visible();
  if (isGalleryItemModalVisible) {
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        galleryItemModal.close();
      }
    });
  }
}
