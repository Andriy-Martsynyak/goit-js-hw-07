import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function GalleryMarkupCreate(picturesList) {
  return picturesList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description} "title="${description}"/>
</a>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', GalleryMarkupCreate(galleryItems));
const lightbox = new SimpleLightbox('.gallery__item', { captionDelay: '250' });
