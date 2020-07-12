// hide menu bar in mobile view

const button = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

button.addEventListener('click', function(){
  console.log('clicked')
  menu.classList.toggle('visible');

});



// gallery in index page //
const imgList = [
  { id: 317, alt: '', src: 'https://picsum.photos/id/317/200/200', description: 'Vietnam' , link : 'https://i.picsum.photos/id/317/1935/1089.jpg?hmac=veRodF8Ti5rEi0KWd2JMP9fUYm8jtTlq2zdmLCUM0uc'},
  { id: 318, alt: '', src: 'https://picsum.photos/id/318/200/200', description: 'Paris' , link : 'https://i.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU'},
  { id: 323, alt: '', src: 'https://picsum.photos/id/323/200/200', description: 'Indonesia' , link : ''},
  { id: 327, alt: '', src: 'https://picsum.photos/id/327/200/200', description: 'Japan' , link : ''},
  { id: 392, alt: '', src: 'https://picsum.photos/id/392/200/200', description: 'San Fransisco' , link : ''},
  { id: 397, alt: '', src: 'https://picsum.photos/id/397/200/200', description: 'India' , link : ''},
]

let image = document.querySelector('.img-cell');

// imgtemplate format : <span> <a href="">Vietnam<img src="" alt=""></a></span>

imgtemplate = '';

imgList.forEach(function (item) {
  console.log(`<img src="${item['src']}"`);
  imgtemplate += `<a href="${item['link']}"><img src="${item['src']}" alt="${item['alt']}"></a>`;
  console.log(imgtemplate);
});

image.innerHTML = imgtemplate
// console.log(image.innerHTML)

// register and login form //

// const form = document.querySelector('form');

// form.addEventListener('submit', function f(event){
//   event.preventDefault();
//   if (form.classList.contains('.invalid')) {
//     form.classList.add("")
//   }
// });

