const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');


const closedFace2 = document.querySelector('.closed2');
const openFace2 = document.querySelector('.open2');


// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    openFace2.classList.add('active2');

    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});       




closedFace2.addEventListener('click', () => {
    if (openFace2.classList.contains('open2')) {
      closedFace2.classList.remove('active2');
    }
  });
  
  openFace2.addEventListener('click', () => {
    if (closedFace2.classList.contains('closed2')) {
      closedFace2.classList.add('active2');
      openFace2.classList.remove('active2');
    }
  });       