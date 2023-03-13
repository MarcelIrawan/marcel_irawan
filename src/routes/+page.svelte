<script lang="ts">
	$: innerWidth = 0;
</script>

<svelte:head>
	<title>Home | Marcel Irawan</title>
</svelte:head>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<header>
		<!-- <img src="assets/icon.jpg" alt="hanging lamp" /> -->
		<div>
			{#if innerWidth > 600}
				<h1>Place to Share</h1>
			{:else}
				<h1>Place to Share</h1>
				<!-- <h1>and thoughts</h1> -->
			{/if}
		</div>
	</header>

	<div>
		<h2>About</h2>
		<p>
			Will be using this web to share my writings. I do love to write, mostly poem and something like story telling.
			I also starting some photography, check out some of it on my <a href="https://instagram.com/mrcl.irawan">Instagram</a>.
		</p>
		<br />
		<!-- <a href="/about">More info...</a> -->
	</div>
	<hr>
	<div>
		<h2>Recent Posts</h2>
		<p>No posts yet.</p>
	</div>

	<!-- <div>
		<h2>Tags</h2>
		<p>No tags yet.</p>
	</div> -->
</div>

<style>
	.wrapper {
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 97ch;
	}

	header {
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		font-family: var(--font-heading);
	}

	header div {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	div {
		padding-bottom: 1.5em;
	}

	img {
		height: clamp(240px, 25vw, 375px);
		padding-bottom: clamp(1em, 3vw, 2em);
	}

	h1 {
		font-weight: 500;
		font-size: clamp(1.5rem, 3vw, 2rem);
		width: fit-content;
		position: relative;
	}

	h2 {
		font-weight: 500;
		font-size: clamp(1.5rem, 3vw, 2rem);
		width: fit-content;
		position: relative;
		margin-bottom: 0.5em;
		font-family: var(--font-heading);
	}

	h2::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: #FAEAB1;
		/* background: #E5BA73; */
	}

	h1::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: #E5BA73;
		/* background: #FAEAB1; */
	}

	p {
		font-size: clamp(1rem, 2vw, 1.15rem);
		line-height: 1.8rem;
	}
</style>
