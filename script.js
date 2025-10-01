const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');

images.forEach((img) =>
  img.addEventListener('click', (e) => (current.src = e.target.src)),
);
