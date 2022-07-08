import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(galleryItems[0].preview);
// console.log(galleryItems[0].original);
// console.log(galleryItems[0].description);
console.log("================================================");
// event.preventDefault(); //! отменить действие по умолчанию - preventDefault().


//! 1.Получаем ссылку на div-контейнер:
const ImageContainer = document.querySelector('.gallery');
// console.log(ImageContainer);

//!   2.В переменную ImageMarkup записываем новую разметку 
//!  как результат вызовыа ф-ции createImageCardsMarkup 
//!  с аргументом - массив объектов galleryItems):
const ImageMarkup = createImageCardsMarkup(galleryItems);

//!   3.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
ImageContainer.insertAdjacentHTML('beforeend', ImageMarkup);
//!                            ИЛИ (2-ой вариант):
//!   3.Добавляем новую разметку в div-контейнер с помощью innerHTML:
// ImageContainer.innerHTML = ImageMarkup;


//!   3.1.Консолим новую разметку div-контейнера:
// console.log(createImageCardsMarkup(galleryItems));


//!   4.Сосдаем слушателя событий методом делегирования:
ImageContainer.addEventListener('click', onImageContainerClick);


//!   1.1.Ф-ция, к-рая создает массив с новой разметкой:
function createImageCardsMarkup(galleryItems) {
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
    evt.preventDefault(); //? отменить действие по умолчанию - preventDefault().

    console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(evt.target);

    const imageEl = evt.target.src;
    console.log(imageEl);

    console.log(evt.target.dataset.source);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    

    // instance.show()
    basicLightbox.create(`
		<img src="${evt.target.dataset.source}">
	`).show()

}



// const instance = basicLightbox.create(
//     `<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>`
// )

// спочатку в інстансі має бути зображення з пустим src
// і по кліку ми маємо витягувати src з event та вставляти його в інстанс в src який раніше був пустий
