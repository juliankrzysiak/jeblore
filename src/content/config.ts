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
const cast = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			info: z.object({
				age: z.string(),
				hobbies: z.string(),
			}),
			images: z
				.object({
					image: image().refine((img) => img),
					imageAlt: z.string(),
				})
				.array(),
		}),
});
export const collections = {
	comics,
	cast,
};
