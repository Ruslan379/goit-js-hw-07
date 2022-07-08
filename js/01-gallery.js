import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(galleryItems[0].preview);
// console.log(galleryItems[0].original);
// console.log(galleryItems[0].description);
// console.log("================================================");



//! 1.Получаем ссылку на div-контейнер:
const ImageContainer = document.querySelector('.gallery');
// console.log(ImageContainer);

//!   2.В переменную ImageMarkup записываем новую разметку 
//!  как результат вызовыа ф-ции createImageCardsMarkup 
//!  с аргументом - массив объектов galleryItems):
const ImageMarkup = createImageCardsMarkup();

//!   3.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
ImageContainer.insertAdjacentHTML('beforeend', ImageMarkup);
//!                            ИЛИ (2-ой вариант):
//!   3.Добавляем новую разметку в div-контейнер с помощью innerHTML:
// ImageContainer.innerHTML = ImageMarkup;


//!   3.1.Консолим новую разметку div-контейнера:
// console.log(createImageCardsMarkup(galleryItems));


//!   4.Сосдаем слушателя событий методом делегирования:
// console.log(ImageContainer.addEventListener('click', onImageContainerClick));
ImageContainer.addEventListener('click', onImageContainerClick);
// console.log(onImageContainerClick());


//!   1.1.Ф-ция, к-рая создает массив с новой разметкой:
function createImageCardsMarkup() {
    return galleryItems
    .map(({ preview, original, description }) => {
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
}

//!   4.1.Ф-ция, к-рая прослушивает клики от ВСЕХ изображений:
function onImageContainerClick(evt) {
    evt.preventDefault(); //TODO отменить действие по умолчанию - preventDefault().

    // console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log(evt.target);
    // console.log(evt.target.src);
    // console.log(evt.target.dataset.source); //! ссылка на кликнутое оригинальное изображение
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++");

    
    //! 1 - вариант 
    instance.element().querySelector('img').setAttribute('src', evt.target.dataset.source);
    instance.show();


    //! 2 - вариант 
    // basicLightbox.create(`
	// 	<img src="${evt.target.dataset.source}">
	// `).show()
}

//! 1 - вариант 
const instance = basicLightbox.create(`
		<img src="">
	`)




