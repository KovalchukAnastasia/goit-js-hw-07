import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1. Створення та рендер розмітки з масиву даних

const galaryEl = document.querySelector('.gallery');

const galleryTemplate = galleryItems.reduce((acc, galaryItem) => acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${galaryItem.original}">
    <img loading='lazy'
      class="gallery__image"
      src="${galaryItem.preview}"
      data-source="${galaryItem.original}"
      alt="${galaryItem.description}"
    />
  </a>
</div>`, '');

galaryEl.insertAdjacentHTML('beforeend', galleryTemplate);

// 2. Реалізація делегування

galaryEl.addEventListener('click', onClickEl);

function onClickEl(event) {
    event.preventDefault();

    const isImage = event.target.classList.contains('gallery__image');

    if (!isImage) {
        return;
    };

    console.log(event.target);

    const isActiveImage = event.target;

    // 3. модальне вікно

    const instance = basicLightbox.create(`
        <div class="modal">
        <img loading='lazy' width="100%"
            src="${isActiveImage.dataset.source}"
            />
        </div>`);
    instance.show();

    const modalImage = document.querySelector(".modal");

    modalImage.addEventListener("click", onClickBigImage);
    document.addEventListener("keydown", onKeyPressDown);

    function onClickBigImage(event) {
        instance.close();
        document.removeEventListener('keydown', onKeyPressDown);
    };

    function onKeyPressDown(event) {
         if (event.code === "Escape") {
             instance.close();
             document.removeEventListener('keydown', onKeyPressDown);
        };
        
    };
    
};

console.log(galleryItems);
