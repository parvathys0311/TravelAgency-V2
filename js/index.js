// hide menu bar in mobile view

const button = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

// function to change nav view style is linked to button click
button.addEventListener('click', function () {
  menu.classList.toggle('visible');

});


// gallery section in index page //

// creating an array of images//
const imgList = [
  { id: 411, alt: 'Destination 1: New York', src: 'https://picsum.photos/id/411/200/200', description: 'New York', link: 'https://i.picsum.photos/id/411/5183/2444.jpg?hmac=84Rb7FV31ExwFZ5l0fIaubSUVG9Ivrs51Tr6edx1BY8' },
  { id: 318, alt: 'Destination 2 : Paris', src: 'https://picsum.photos/id/318/200/200', description: 'Paris', link: 'https://i.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU' },
  { id: 323, alt: 'Destination 3 : Indonesia', src: 'https://picsum.photos/id/323/200/200', description: 'Indonesia', link: 'https://i.picsum.photos/id/323/3831/2554.jpg?hmac=ONpiXSk-ALsNy0EJyL9MxFGjaqDHmP7gU17FGgDk-Jw' },
  { id: 327, alt: 'Destination 4 : Japan', src: 'https://picsum.photos/id/327/200/200', description: 'Japan', link: 'https://i.picsum.photos/id/327/4442/2961.jpg?hmac=NWAIsS-aGuh9RbL1BJp8jEShGdHWf0Hf5qUaE950en0' },
  { id: 392, alt: 'Destination 5 : San Fransisco', src: 'https://picsum.photos/id/392/200/200', description: 'San Fransisco', link: 'https://i.picsum.photos/id/392/5580/3720.jpg?hmac=SHJx3DtQS1aAPntmf27wp2mQ5FqQHFKh7hai6wdZSrA' },
  { id: 397, alt: 'Destination 6 : India ', src: 'https://picsum.photos/id/397/200/200', description: 'India', link: 'https://i.picsum.photos/id/397/4475/2984.jpg?hmac=_PEWxhdxVnCU15wD6E-blJDbpMVH17QQVV0JYMZnkjc' },
]

let image = document.querySelector('.img-cell');
let imgtemplate = '';
// imgtemplate format : <a href="">Vietnam<img src="" alt=""></a>

// loops thorugh each image in the array and set the template
imgList.forEach(function (item) {
  imgtemplate += `<a href="${item['link']}"><img src="${item['src']}" alt="${item['alt']}"></a>`;
});

// display each image in the array to thegallery section of index page
image.innerHTML = imgtemplate
