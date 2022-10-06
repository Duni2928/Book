
"use strict"
//book-section

const book = document.querySelector('.book');
const page = Array.from(book.children);
page.forEach(item => {
  const zIndex = item.getAttribute('data-index');
  item.style.zIndex = -zIndex;
})
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let currentPage = 0
let animation = false
next.addEventListener("click", () => {
  if (!page[0].classList.contains("open")) {
    animation = true
    page.forEach(el => {
      el.classList.add("open")
    })
    setTimeout(() => {
      page[0].classList.add("change")
      animation = false
    }, 800);
  } else if (!animation) {
    if ((currentPage == 5)) {
      return
    } else {
      currentPage++
      page[currentPage].classList.add("change")
      page[currentPage].style.zIndex = currentPage;
    }
  }
})
prev.addEventListener("click", () => {
  page[currentPage].classList.remove("change")
  page[currentPage].style.zIndex = -currentPage;
  currentPage--
  if (currentPage == -1) {
    currentPage = 0
    setTimeout(() => {
      page.forEach(item => {
        item.classList.remove("open")
      })
    }, 800);

  }
})

