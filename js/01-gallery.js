import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let closeModalVariable = null;

const createGalleryTemplate = picturesList => {
  return picturesList
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`;
    })
    .join('');
};
const OnImgClick = e => {
  if (e.target === e.currentTarget) {
    return;
  }

  e.preventDefault();

  const modal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    { onClose: () => window.removeEventListener('keydown', escapeClose) }
  );

  closeModalVariable = modal;
  modal.show();

  window.addEventListener('keydown', escapeClose);
};
const escapeClose = e => {
  console.log(e);

  if (e.key === 'Escape') {
    closeModalVariable.close();
  }
};

gallery.insertAdjacentHTML('afterbegin', createGalleryTemplate(galleryItems));
gallery.addEventListener('click', OnImgClick);
gallery.addEventListener('keydown', escapeClose);
