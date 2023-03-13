<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { capitalize } from '$lib/utils/utils';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';
	let y: number;
	$: innerWidth = 0;
	let opened = false;
	$: opened = $navigating ? false : opened;
	const menu = { home: '', about: 'about', posts: 'posts' };
</script>

<svelte:window bind:scrollY={y} bind:innerWidth />

<nav class={y > 1 ? 'shadowed' : ''}>
	<div class="logo">
		<a href="/">
			<p>Marcel</p>
			<p>Irawan</p>
		</a>
	</div>

	{#if innerWidth < 600}
		<span on:click={() => (opened = !opened)}>
			{#if opened}
				<XIcon size="24" />
			{:else}
				<MenuIcon size="24" />
			{/if}
		</span>
	{/if}

	{#if innerWidth > 600 || opened}
		<div class="menu" transition:slide={{ duration: opened ? 100 : 0 }}>
			{#each Object.entries(menu) as [title, link]}
			<a class:active={$page.url.pathname === `/${link}`} data-sveltekit-preload-data href="/{link}"
				>{capitalize(title)}</a
			>
			{/each}
		</div>
	{/if}
</nav>

<style>
	nav {
		padding: 0.5em 1em;
		height: 3.5em;
		background-color: #ffff;
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		z-index: 1;
		font-family: var(--font-heading);
	}

	nav > span {
		cursor: pointer;
		display: flex;
		color: var(--martinique);
	}

	.shadowed {
		filter: drop-shadow(0px 4px 8px rgba(142, 142, 142, 0.15));
		transition: 500ms linear;
	}

	.logo {
		z-index: 1;
	}

	.logo p {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--martinique);
		width: fit-content;
		position: relative;
	}

	.logo p::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: #FAEAB1;
	}

	.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.menu a {
		display: flex;
		position: relative;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--martinique);
		font-weight: 500;
		font-size: 1rem;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.menu a.active::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 10px;
		z-index: -1;
		left: 0;
		right: 0;
		margin: 0 1em;
		background:  #E5BA73;
	}

	@media only screen and (max-width: 600px) {
		.logo p {
			font-size: 0.6rem;
		}

		nav {
			position: fixed;
			top: unset;
			bottom: 0;
			height: unset;
			width: 100%;
			align-items: center;
			z-index: 3;
			box-shadow: 0px -4px 8px rgba(152, 152, 152, 0.12);
		}

		.menu a.active::after {
			bottom: 2px;
		}

		.menu {
			display: flex;
			flex-direction: column;
			padding: 1em;
			justify-content: center;
			width: 100%;
			position: absolute;
			top: 1px;
			left: 0;
			gap: 1em;
			box-shadow: 0px -4px 8px rgba(152, 152, 152, 0.12);
			transform: translateY(-100%);
			background: #fff;
		}
	}
</style>
