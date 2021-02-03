'use strict'

import {
  isMobile, tabletCheck
} from './isMobile'

import {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isEdgeChromium,
} from './browsers'

import getTransitionEndEventName from './getTransitionEndEventName'

type AppType = {
  // events name
  transitionEndName: String, // название события transition end, которое работает в данном браузере
  // screen size
  scrollbarWidth: Number, // ширина скроллбара
  contentWidth: Number, // ширина окна прокрутка (без скроллбара)
  fullWidth: Number, // вся ширина окна
  contentHeight: Number, // высота окна минус прокрутка (без скроллбара)
  fullHeight: Number, // вся высота окна
  // phone types
  isMobile: Boolean, // это мобильное устройство?
  isTablet: Boolean, // это планшет?
  isMobileOrTablet: Boolean, // это планшет или мобильное устройство?
  // OS
  isAndroid: Boolean, // это андроид?
  isiOS: Boolean, // это ios?
  isWindowsMobile: Boolean, // это windows phone?
  // browsers
  isOpera: Boolean,
  isFirefox: Boolean,
  isSafari: Boolean,
  isIE: Boolean,
  isEdge: Boolean,
  isChrome: Boolean,
  isEdgeChromium: Boolean,
}

const App: AppType = {
  transitionEndName: getTransitionEndEventName(),

  scrollbarWidth: window.innerWidth - document.documentElement.clientWidth || 0,
  contentWidth: isMobile.any() ? document.documentElement.clientWidth : window.innerWidth,
  fullWidth: window.innerWidth,
  contentHeight: isMobile.any() ? document.documentElement.clientHeight : window.innerHeight,
  fullHeight: window.innerHeight,

  isMobile: isMobile.any(), // если мобильное устройство
  isTablet: !!tabletCheck(), //если планшет
  isMobileOrTablet: !!(isMobile.any() || !!tabletCheck()), // если планшет или мобильное устройство

  isAndroid: isMobile.Android(), // если андроид
  isiOS: isMobile.iOS(), // если ios
  isWindowsMobile: isMobile.Windows(), // если windows phone

  isOpera: !!isOpera, // если это браузер Opera
  isFirefox: !!isFirefox, // если это браузер Firefox
  isSafari: !!isSafari, // если это браузер Safari
  isIE: !!isIE, // если это браузер IE
  isEdge: !!isEdge, // если это браузер Edge
  isChrome: !!isChrome, // если это браузер Chrome
  isEdgeChromium: !!isEdgeChromium, // если это браузер Edge
}

export default App
