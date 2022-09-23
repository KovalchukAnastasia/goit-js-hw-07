import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from "simplelightbox";

const galaryEl = document.querySelector('.gallery');

const galleryTemplate = galleryItems.reduce((acc, galaryItem) => acc +
    `<a class="gallery__item" href="${galaryItem.original}">
        <img class="gallery__image"
            src="${galaryItem.preview}" alt="${galaryItem.description}"
        />
    </a>`, '');

galaryEl.insertAdjacentHTML('beforeend', galleryTemplate);

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250" });

console.log(galleryItems);

