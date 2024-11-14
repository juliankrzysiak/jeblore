import { z, defineCollection } from 'astro:content';
const comics = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			image: image().refine((img) => img),
			imageAlt: z.string(),
			date: z.date(),
		}),
});
export const collections = {
	comics: comics,
};
