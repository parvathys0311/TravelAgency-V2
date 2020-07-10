
const imgList = [
  { id: 317, alt: '', src: 'https://picsum.photos/id/317/200/200', description: '' },
  { id: 318, alt: '', src: 'https://picsum.photos/id/318/200/200', description: '' },
  { id: 323, alt: '', src: 'https://picsum.photos/id/323/200/200', description: '' },
  { id: 327, alt: '', src: 'https://picsum.photos/id/327/200/200', description: '' },
  { id: 392, alt: '', src: 'https://picsum.photos/id/392/200/200', description: '' },
  { id: 397, alt: '', src: 'https://picsum.photos/id/397/200/200', description: '' },
]

let image = document.querySelector('.img-cell');
imgtemplate = '';

imgList.forEach(function (item) {
  console.log(`<img src="${item['src']}"`);
  imgtemplate += `<img src="${item['src']}">`;
});

image.innerHTML = imgtemplate
console.log(image.innerHTML)



