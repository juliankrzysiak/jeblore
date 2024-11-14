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
					name: { label: 'Title' },
					slug: { description: 'URL-friendly version of the title' },
				}),
				image: fields.image({ label: 'Image' }),
				imageAlt: fields.text({
					label: 'Alt',
					description: 'Short description of the comic for accessibilty',
				}),
				date: fields.date({ label: 'Date' }),
			},
		}),
	},
});
