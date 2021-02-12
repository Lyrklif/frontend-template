import { renderer } from 'storypug'
import text from './text.pug'
import allVariantsText from './text_template.pug'

const { html } = renderer()

const tagOptions = [
  'p',
  'span',
  'div',
  'small',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]
const variantOptions = [
  'text',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]

export default {
  title: 'Components/Text',
  parameters: {
    docs: {
      description: {
        component: 'Описание лоадера...',
      },
    },
  },
  argTypes: {
    label: {control: 'text', defaultValue: 'Параметры этого текста можно менять'},
    tag: {control: {type: 'select', options: tagOptions }, description: 'тег', defaultValue: tagOptions[0]},
    variant: {control: {type: 'select', options: variantOptions }, description: 'вариант текста', defaultValue: variantOptions[0]},
  },
}

export const Text = (arg = {}) => html(text, arg, arg.label)
export const Typography = () => html(allVariantsText)
