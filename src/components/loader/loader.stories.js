import { renderer } from 'storypug'
import loader from './loader.pug'

const { html } = renderer()

const sizeOptions = ['normal', 'small', 'large']

export default {
  title: 'Components/Loader',
  parameters: {
    docs: {
      description: {
        component: 'Описание лоадера...',
      },
    },
  },
  argTypes: {
    size: { control: { type: 'select', options: sizeOptions }, description: 'размер лоадера', defaultValue: sizeOptions[0] },
  },
}

export const LoaderBasic = (arg = {}) => html(loader, arg, arg.label)
