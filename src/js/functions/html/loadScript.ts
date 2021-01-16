'use strict'

/**
 *  добавляет в html тег <script> с ссылкой на скрипт, который нужно загрузить
 *  после загрузки срабатывает callback() => {...}
 *  если такой скрипт уже был загружен ранее (добавлен в html),
 *  то сразу срабатывает callback() => {...}
 *
 *  пример использования:
 *  loadScript('yandexMap', 'https://path-to-yandex-map-script.js')
 *   .then(() => { ... })
 *   .catch((e) => { console.error('ERROR loadScript =>', e) })
 *
 * @param {string} scriptID [название скрипта, его id]
 * @param {string} scriptLink [ссылка на скрипт по типу https://***.js]
 */
const loadScript = (scriptID: string, scriptLink: string) => new Promise((callback) => {
  // найти существует ли скрипт с таким id на странице
  const existingScript: boolean = !!document.getElementById(scriptID)

  // если скрипт не существует
  // добавить его на страницу для загрузки
  if (!existingScript) {
    const script = document.createElement('script')
    script.src = scriptLink
    script.id = scriptID
    document.body.appendChild(script)

    // после того, как скрипт загружен
    script.onload = () => callback(true)
  }

  // если скрипт существует
  if (existingScript) callback(true)
})

export default loadScript
