// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Імпорт бібліотеки SimpleLightbox
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
                 `<a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                 </a>
                 `
).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { 
   captionsData: 'alt',
   captionDelay: 250
});

console.log(galleryItems);
