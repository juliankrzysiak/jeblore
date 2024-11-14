// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		posts: collection({
			label: 'Comics',
			slugField: 'title',
			path: 'src/content/comics/*',
			schema: {
				title: fields.slug({
					name: { label: 'Title', validation: { isRequired: true } },
					slug: { description: 'URL-friendly version of the title' },
				}),
				image: fields.image({
					label: 'Image',
					validation: { isRequired: true },
					directory: 'src/assets/images/comics',
					publicPath: '@assets/images/comics/',
				}),
				imageAlt: fields.text({
					label: 'Alt',
					description: 'Short description of the comic for accessibilty',
					validation: { isRequired: true },
				}),
				date: fields.date({ label: 'Date', validation: { isRequired: true } }),
			},
		}),
	},
});
