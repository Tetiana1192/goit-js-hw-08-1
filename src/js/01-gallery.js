// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const paletteGallery = document.querySelector(".gallery");
const socketGallery = createGallerycardsMarkup(galleryItems);

console.log(createGallerycardsMarkup(galleryItems));



paletteGallery.insertAdjacentHTML('beforeend', socketGallery);




function createGallerycardsMarkup(galleryItems) {

	return galleryItems.map(({preview, original, description}) => {
	return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" style="display: block"/>
</a>`;
    
}) .join('');
}


const gallery = new SimpleLightbox('.gallery a', { 
	captionSelector: "img",
	captionsData: "atl",
	captionPosition:      "botton",
	captionDelay: "250",
	
 });
 
