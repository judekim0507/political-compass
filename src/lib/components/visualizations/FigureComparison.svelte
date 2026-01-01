<script lang="ts">
	import type { FigureSimilarity } from '$lib/types';

	interface Props {
		similarities: FigureSimilarity[];
	}

	let { similarities }: Props = $props();
</script>

<div class="space-y-4">
	{#each similarities as { figure, similarity }}
		<div class="border-2 border-black p-4 space-y-2">
			<div class="flex justify-between items-start">
				<div>
					<h4 class="font-medium">{figure.name}</h4>
					<p class="text-sm text-neutral-500">{figure.era}</p>
				</div>
				<div class="text-right">
					<span class="text-2xl font-medium">{Math.round(similarity)}%</span>
					<span class="block text-xs text-neutral-500">match</span>
				</div>
			</div>
			<p class="text-sm text-neutral-600">{figure.description}</p>
		</div>
	{/each}
</div>
