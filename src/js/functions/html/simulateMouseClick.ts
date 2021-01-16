'use strict'

// какие события можно симулировать (можно добавить другие)
type mouseClickEvent = 'click' | 'mousedown' | 'mouseup'

/**
 * симулировать клик мыши по html элементу
 *
 * @param {HTMLElement} htmlElement [html элемент, по которому будет симулироваться клик мыши]
 * @param {mouseClickEvent} [event='click'] [событие, которое нужно применить]
 */
const simulateMouseClick = (htmlElement: HTMLElement, event: mouseClickEvent = 'click'): void => {
  if (htmlElement && event) {
    // инициируем событие
    htmlElement.dispatchEvent(
      new MouseEvent(event, {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      }),
    )
  }
}

export default simulateMouseClick
