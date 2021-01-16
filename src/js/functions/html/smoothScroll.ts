'use strict'

interface scrollParam {
  position?: "start" | "center" | "end" | "nearest" // [позиция элемента на экране после сролла]
  animation?: "auto" | "smooth" // [анимация скролла]
}

/**
 * плавный скролл к цели
 * целью может быть html элемент или расстояние от верха страницы
 *
 * @param {(number | HTMLElement)} target
 * @param {scrollParam} [param={}]
 */
const smoothScroll = (target: number | HTMLElement, param: scrollParam = {}): void => {
  const {
    position = "center",
    animation = "smooth",
  } = param

  // если передано расстояние от верха страницы
  if (typeof target === 'number') {
    window.scroll({
      top: target,
      behavior: animation,
    })
  }

  // если передан html элемент, к которому нужно переместиться
  if (target && target instanceof HTMLElement) {
    target.scrollIntoView({
      behavior: animation,
      block: position
    })
  }
}

export default smoothScroll
