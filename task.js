const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');

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