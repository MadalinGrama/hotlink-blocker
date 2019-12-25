let images = document.getElementsByTagName('img');
let context = document.addEventListener("contextmenu", hotblocker);

function hotblocker(){
  for (let i = 0; i < images.length; i++) {
    function setAttributes(el, attr) {
      Object.keys(attr).forEach(key => el.setAttribute(key, attr[key]));
    }
    setAttributes(images[i], {
      src: 'https://en.wikipedia.org/wiki/Copyright',
      srcset: 'https://en.wikipedia.org/wiki/Copyright'
    });

    }
}
