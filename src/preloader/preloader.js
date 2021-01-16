'use strict'

const preloader = () => {
  const showClass = 'preloader_show'
  const hideClass = 'body_hidden'
  const waitingTime = 10000

  const preloader = document.querySelector('.preloader')
  const body = document.querySelector('body')

  if (!preloader || !body) return false

  // показать preloader
  function show() {
    preloader.classList.add(showClass)
    body.classList.add(hideClass)
  }

  // скрыть preloader
  function hide() {
    preloader.classList.remove(showClass)
    body.classList.remove(hideClass)
  }


  // запасной вариант скрыть preloader gjckt 10сек ожидания
  const fallbackOption = setTimeout(() => hide(), waitingTime)


  // после загрузки страницы
  window.addEventListener('load', () => {
    clearTimeout(fallbackOption)
    hide()
  })


  return {
    show,
    hide,
  }
}

preloader()
