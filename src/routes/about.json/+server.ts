import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { parseDir } from '$lib/utils/parser';

import path from 'path';

export const GET: RequestHandler = async () => {
	const articles = parseDir('content/about', (data: any, content: string, filename: string) => {
		const [slug] = path.basename(filename, path.extname(filename));
		return { slug, ...data, content };
	}).reduce((acc, cur) => {
		const { slug, ...res } = cur;
		return { ...acc, [slug]: res };
	}, {});
	// console.log(articles)
	if (articles) {
		return json(articles);
	}

	return new Response(undefined, { status: 404 });
};
