console.log('funguju');

const changeColor = () => {
  const svgElm = document.querySelector('#product-image');
  svgElm.style.color = '#ffffff';
};

const btnElm = document.querySelector('.bila');
btnElm.addEventListener('click', changeColor);
