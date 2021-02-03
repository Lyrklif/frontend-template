/* eslint-disable no-unused-vars */
'use strict'

import {debounce} from 'lodash'

// *** основные (универсальные) скрипты
import { hide, show, toggle } from './functions/show-hide-toggle'
import { App } from './functions/app'
import { getSearchParams } from './functions/url'
import { loadScript, simulateMouseClick, smoothScroll } from './functions/html'
import { keyPressed,
  isEscapeKey,
  isEnterKey,
  isBackspaceKey,
  isDeleteKey,
  isSpaceKey,
  isPasteEvent,
  isCopyEvent,
  isSelectAllEvent,
} from './functions/keyboard'


// *** скрипты для отдельных страниц
import showHideToggle from './pages-fun/show-hide-toggle'


// *** указываем типы новых функций в window
declare global {
  interface Window {
    App: any,
    show: Function,
    hide: Function,
    toggle: Function,
    loadScript: Function,
    simulateMouseClick: Function,
    getSearchParams: Function,
    smoothScroll: Function,
    getTransitionEndEventName: Function,
    keyPressed: Function,

    isEscapeKey: Function,
    isEnterKey: Function,
    isBackspaceKey: Function,
    isDeleteKey: Function,
    isSpaceKey: Function,
    isPasteEvent: Function,
    isCopyEvent: Function,
    isSelectAllEvent: Function,

    opera: any,
    chrome: any,
    opr: any,
    InstallTrigger: any,
    HTMLElement: any,
    documentMode: any,
    safari: any,
  }
}

// *** после загрузки
window.addEventListener('load', () => {
  // сделать основные функции доступными из любого места программы
  window.show = show || {} // показать html-элемент
  window.hide = hide || {} // скрыть html-элемент
  window.toggle = toggle || {} // показать/скрыть html-элемент
  window.getSearchParams = getSearchParams || {} // возвращает search парметр из url строки
  window.loadScript = loadScript || {} // добавляет в html тег <script> с ссылкой на скрипт, который нужно загрузить
  window.simulateMouseClick = simulateMouseClick || {} // симулировать клик мыши по html элементу
  window.smoothScroll = smoothScroll || {} // плавный скролл к цели

  window.keyPressed = keyPressed || {} // обработка нажатия клавиш

  window.isEscapeKey = isEscapeKey || {} // нажата клавиша Esc
  window.isEnterKey = isEnterKey || {} // нажата клавиша Enter
  window.isBackspaceKey = isBackspaceKey || {} // нажата клавиша Backspace
  window.isDeleteKey = isDeleteKey || {} // нажата клавиша Delete
  window.isSpaceKey = isSpaceKey || {} // нажата клавиша Space
  window.isPasteEvent = isPasteEvent || {} // нажаты клавиши Ctrl + V
  window.isCopyEvent = isCopyEvent || {} // нажаты клавиши Ctrl + C
  window.isSelectAllEvent = isSelectAllEvent || {} // нажаты клавиши Ctrl + A

  // сделать параметры доступными из любого места программы
  window.App = App || {} // основные параметры

  // запускаем функции отдельных страниц
  showHideToggle()

})

type callbackParams = {
  fullWidth: Number,
  contentWidth: Number,
  fullHeight: Number,
  contentHeight: Number,
}
const screenResizeHandle = (callback: Function): callbackParams => {
  const params: callbackParams = {
    fullWidth: window.innerWidth, // вся ширина окна
    contentWidth: document.documentElement.clientWidth, // ширина минус прокрутка
    fullHeight: window.innerHeight, // вся высота окна
    contentHeight: document.documentElement.clientHeight, // высота минус прокрутка
  }

  if (callback) callback(params)
  return params
}

const callback = (params: callbackParams): void => {
  if (window.App) {
    const { fullWidth, contentWidth, fullHeight, contentHeight } = params

    window.App.fullWidth = fullWidth
    window.App.contentWidth = contentWidth
    window.App.fullHeight = fullHeight
    window.App.contentHeight = contentHeight
    window.App.scrollbarWidth = +fullWidth - +contentWidth
  }
}

// при изменении экрана обновлять данные в App
window.addEventListener('resize', debounce(() => screenResizeHandle(callback), 150))
