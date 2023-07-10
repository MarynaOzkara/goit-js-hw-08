// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Імпорт бібліотеки SimpleLightbox
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
                 `<li class="gallery__item">
                 <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                 </a>
              </li>
                 `
).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

console.log(galleryItems);
