const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');
const fontColor = document.querySelector('.book__control_color').querySelectorAll('.color');
const bgColor = document.querySelector('.book__control_background').querySelectorAll('.color');


for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener('click', (event) => {
    event.preventDefault();
    if (!fontSize[i].className.includes('font-size_active')) {
      document.querySelector('.font-size_active').classList.remove('font-size_active');
      fontSize[i].classList.add('font-size_active');

      const dataSize = fontSize[i].getAttribute('data-size');
      if (!dataSize) {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
      } else {
        if (dataSize === 'small') {
          book.classList.remove('book_fs-big');
          book.classList.add('book_fs-small');
        } else {
          book.classList.remove('book_fs-small');
          book.classList.add('book_fs-big');
        }
      }
    }
  })
}

for (let i = 0; i < fontColor.length; i++) {
  fontColor[i].addEventListener('click', (event) => {
    event.preventDefault();
    if (!fontColor[i].className.includes('color_active')) {
      document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active');
      fontColor[i].classList.add('color_active');

      const dataTextColor = fontColor[i].getAttribute('data-text-color');
        if (dataTextColor === 'black') {
          book.classList.remove('book_color-gray');
          book.classList.remove('book_color-whitesmoke');
          book.classList.add('book_color-black');
        } else if (dataTextColor === 'gray') {
          book.classList.remove('book_color-black');
          book.classList.remove('book_color-whitesmoke');
          book.classList.add('book_color-gray');
        } else if (dataTextColor === 'whitesmoke') {
          book.classList.remove('book_color-black');
          book.classList.remove('book_color-gray');
          book.classList.add('book_color-whitesmoke');
        }
    }
  })
}

for (let i = 0; i < bgColor.length; i++) {
  bgColor[i].addEventListener('click', (event) => {
    event.preventDefault();
    if (!bgColor[i].className.includes('color_active')) {
      document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active');
      bgColor[i].classList.add('color_active');

      const dataTextColor = bgColor[i].getAttribute('data-bg-color');
        if (dataTextColor === 'black') {
          book.classList.remove('book_bg-gray');
          book.classList.remove('book_bg-white');
          book.classList.add('book_bg-black');
        } else if (dataTextColor === 'gray') {
          book.classList.remove('book_bg-black');
          book.classList.remove('book_bg-white');
          book.classList.add('book_bg-gray');
        } else if (dataTextColor === 'white') {
          book.classList.remove('book_bg-black');
          book.classList.remove('book_bg-gray');
          book.classList.add('book_bg-white');
        }
    }
  })
}