import { defineField } from 'sanity'

export const textAlign = defineField({
  name: 'textAlign',
  title: 'Text align',
  type: 'string',
  options: {
    list: [
      { title: 'Left', value: 'left' },
      { title: 'Center', value: 'center' },
      { title: 'Right', value: 'right' },
      { title: 'Justify', value: 'justify' },
    ],
    layout: 'radio',
  },
})
