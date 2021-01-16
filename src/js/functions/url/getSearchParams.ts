'use strict'

/**
 *  возвращает search парметр из url строки
 *
 * @param {string} paramName
 * @return {string || null}
 */
const getSearchParams = (paramName: string) => {
  const urlParams = new URLSearchParams(window.location.search)

  return urlParams.get(paramName)
}

export default getSearchParams
