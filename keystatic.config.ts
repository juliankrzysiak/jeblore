// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		comics: collection({
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
		cast: collection({
			label: 'Cast',
			slugField: 'name',
			path: 'src/content/cast/*',
			format: { contentField: 'text' },
			schema: {
				name: fields.slug({
					name: { label: 'Name', validation: { isRequired: true } },
					slug: { description: 'URL-friendly version of the title' },
				}),
				info: fields.object(
					{
						age: fields.text({ label: 'Age' }),
						hobbies: fields.text({ label: 'Hobbies' }),
					},
					{ label: 'Info' }
				),
				text: fields.markdoc({
					label: 'Text',
				}),
				images: fields.array(
					fields.object({
						image: fields.image({
							label: 'Image',
							validation: { isRequired: true },
							directory: 'src/assets/images/cast',
							publicPath: '@assets/images/cast/',
						}),
						imageAlt: fields.text({
							label: 'Alt',
							description: 'Short description of the image for accessibilty',
							validation: { isRequired: true },
						}),
					}),
					{ label: 'Images' }
				),
			},
		}),
	},
});
