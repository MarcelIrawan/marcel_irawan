export const load: import('./$types').PageLoad = async ({fetch}) => {
	const articles = await fetch('/about.json').then((r) => r.json());
	// console.log(articles)
	return {
		post: articles
	};
};