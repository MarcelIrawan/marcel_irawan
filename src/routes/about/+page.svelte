<script lang="ts">
	export let data: import('./$types').PageData;
	import TapedPolaroid from '$lib/components/TapedPolaroid.svelte';
	import Article from '$lib/pages/Article.svelte';
	// console.log(data)
</script>

<svelte:head>
	<title>About | Marcel Irawan</title>
</svelte:head>

<Article>
	<TapedPolaroid src="assets/icon.jpg" alt="hanging lamps" />

	<section>
		{@html data.post.i.content}
	</section>
</Article>
