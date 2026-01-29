import { defineField } from 'sanity'

export const alignItems = defineField({
	name: 'alignItems',
	title: 'Align items',
	type: 'string',
	options: {
		list: [
			{ title: 'Start', value: 'flex-start' },
			{ title: 'Center', value: 'center' },
			{ title: 'End', value: 'flex-end' },
		],
		layout: 'radio',
	},
})
