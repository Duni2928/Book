
"use strict"
//book-section

const book = document.querySelector('.book');
const cover = document.querySelectorAll('.cover');
const page = Array.from(book.children);
page.forEach(item => {
  const zIndex = item.getAttribute('data-index');
  item.style.zIndex = -zIndex;
  item.addEventListener('click', () => {
    if (item.classList.contains('cover-first')){
      if (!item.classList.contains("open")) {
        page.forEach(el => {
          el.classList.add("open")
        })
        setTimeout(() => {
          item.classList.add('change')
          item.style.zIndex = zIndex;
        }, 1000);
      } else {
        item.classList.remove('change')
        item.style.zIndex = -zIndex;
        setTimeout(() => {
          page.forEach(el => {
            el.classList.remove("open")
          })
        }, 1000);
      }
    } else {
      if (item.classList.contains("change")) {
        item.classList.remove("change")
        item.style.zIndex = -zIndex;
      } else {
        item.classList.add('change')
        item.style.zIndex = zIndex;
      }
    }
  })
})
