import { renderer } from 'storypug'
import btn from './btn.pug'

const { html } = renderer()


export default {
  title: 'Компоненты/Btn',
}

// default
export const Default = () => html(btn, {}, 'Label')
Default.story = {
  parameters:{pugCode:'./type_button.pug'}

}

// type=submit
export const Submit = () => html(btn, { type: 'submit' }, 'Send')
Submit.story = {
  parameters:{pugCode:'./type_submit.pug'}

}
