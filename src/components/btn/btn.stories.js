import { renderer } from 'storypug'
import btn from './btn.pug'

const { html } = renderer()

const sizeOptions = ['normal', 'small', 'large']
const typeOptions = ['button', 'submit']
const tagOptions = ['button', 'a', 'div']

export default {
  title: 'Components/Btn',
  parameters: {
    docs: {
      description: {
        component: 'Описание кнопки...',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'текст кнопки', defaultValue: 'Кнопка' },
    title: { control: 'text', description: 'текст при наведении на кнопку', defaultValue: 'Кнопка' },
    disabled: { control: 'boolean', description: 'заблокированна ли кнопка', defaultValue: false },
    fullWidth: { control: 'boolean', description: 'кнопка во всю ширину родительского контейнера', defaultValue: false },
    loading: { control: 'boolean', description: 'кнопка заблокированна на время загрузки', defaultValue: false },
    size: { control: { type: 'select', options: sizeOptions }, description: 'размер кнопки', defaultValue: sizeOptions[0] },
    type: { control: { type: 'select', options: typeOptions }, description: 'тип кнопки', defaultValue: typeOptions[0] },
    tag: { control: { type: 'select', options: tagOptions }, description: 'тег', defaultValue: tagOptions[0] },
  },
}

export const Basic = (arg = {}) => html(btn, arg, arg.label)
export const Primary = (arg = {}) => html(btn, {...arg, primary: true }, arg.label)
export const Secondary = (arg = {}) => html(btn, {...arg, secondary: true }, arg.label)
