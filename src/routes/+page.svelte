<script lang="ts">
	import type { Component } from 'svelte';
	import type { PageData } from './mdviewer/$types';

	let { data } = $props<{ data: PageData }>();
	let files = $derived(data.mdFileData ?? []);
	let hasFiles = $derived(files.length > 0);
	let CurrentComponent = $state<Component>();

	function handleClick(component: Component) {
		CurrentComponent = component;
	}
</script>

{#if hasFiles}
	<main>
		{#each files as file}
			<button onclick={() => handleClick(file.component)}>{file.title + `: ` + file.date}</button>
		{/each}
	</main>
{:else}
	<p>No markdown files found</p>
{/if}

{#if CurrentComponent}
	<CurrentComponent />
{:else}
	<p>No file loaded</p>
{/if}

<pre>{JSON.stringify(files, null, 2)}</pre>
