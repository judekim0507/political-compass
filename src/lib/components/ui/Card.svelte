<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="border-2 border-black bg-white p-8">
	{@render children()}
</div>
