'use strict'


interface ParamsKeyPressedInterface {
  callback?: Function // [срабатывает при нажатии любой клавиши]
}


/**
 * обработка нажатия клавиш
 *
 * пример использования:
 * const callback = (event: KeyboardEvent) => {
 *   const isEsc = window.isEscapeKey(event)
 *   console.log('isEsc', isEsc)
 * }
 * const el = document.querySelector('.tmp-input')
 * window.keyPressed(el, { callback })
 *
 * @param {HTMLElement} element
 * @param {ParamsKeyPressedInterface} [params={}]
 */
const keyPressed = (element: HTMLElement, params: ParamsKeyPressedInterface = {}): void => {
  const {
    callback,
  } = params

  function handle(event: KeyboardEvent) {
    if (callback) callback(event)
  }

  element.addEventListener('keydown', handle)
}

export default keyPressed
