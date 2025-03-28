import { z, defineCollection } from 'astro:content';
const comics = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			draft: z.boolean(),
			image: image().refine((img) => img),
			imageAlt: z.string(),
			video: z.string().optional(),
			date: z.date(),
		}),
});
const cast = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
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
