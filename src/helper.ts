import { getCollection } from 'astro:content';

export async function getComics(order: 'asc' | 'desc' = 'asc') {
	const comics = await getCollection('comics');

	return comics.sort((a, b) => {
		const aDateString = a.data.date;
		const bDateString = b.data.date;

		if (aDateString < bDateString) return order === 'asc' ? -1 : 1;
		if (aDateString > bDateString) return order === 'asc' ? 1 : -1;
		else return 0;
	});
}
