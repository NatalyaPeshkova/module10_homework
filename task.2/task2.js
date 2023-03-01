const btn = document.querySelector('.btn');
// Размеры экрана девайса\монитора. 
// Для этого используется Screen API и два свойства из списка этого API: 
// window.screen.width и window.screen.height.
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

//Размер экрана с учётом полосы прокрутки. Для этого используются свойства window.innerWidth и window.innerHeight.
const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

//Размер экрана без учёта полосы прокрутки. 
// Тут можно использовать document.documentElement.clientWidth и document.documentElement.clientHeight.
const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;


btn.addEventListener('click', () => {

alert(`

Размер экрана/девайса: ${screenWidth}px x ${screenHeight}px. 

Размер экрана с учётом полосы прокрутки: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.

Размер экрана без учёта полосы прокрутки:${windowInnerWidth}px x ${windowInnerHeight}px.

`);

});


