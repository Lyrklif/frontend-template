'use strict'


const ESCAPE: string = 'Escape'
const ENTER: string = 'Enter'
const BACKSPACE: string = 'Backspace'
const DELETE: string = 'Delete'
const SPACE: string = 'Space'
const KEY_V: string = 'KeyV'
const KEY_C: string = 'KeyC'
const KEY_A: string = 'KeyA'


// нажата клавиша Esc
export const isEscapeKey = ({ code }: KeyboardEvent): boolean => code === ESCAPE
// нажата клавиша Enter
export const isEnterKey = ({ code }: KeyboardEvent): boolean => code === ENTER
// нажата клавиша Backspace
export const isBackspaceKey = ({ code }: KeyboardEvent): boolean => code === BACKSPACE
// нажата клавиша Delete
export const isDeleteKey = ({ code }: KeyboardEvent): boolean => code === DELETE
// нажата клавиша Space
export const isSpaceKey = ({ code }: KeyboardEvent): boolean => code === SPACE
// нажаты клавиши Ctrl + V
export const isPasteEvent = ({ code, ctrlKey }: KeyboardEvent): boolean => code === KEY_V && ctrlKey
// нажаты клавиши Ctrl + C
export const isCopyEvent = ({ code, ctrlKey }: KeyboardEvent): boolean => code === KEY_C && ctrlKey
// нажаты клавиши Ctrl + A
export const isSelectAllEvent = ({ code, ctrlKey }: KeyboardEvent): boolean => code === KEY_A && ctrlKey

