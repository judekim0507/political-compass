<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { CompassResults } from '$lib/types';
	import Scene3D from './Scene3D.svelte';

	interface Props {
		results: CompassResults;
	}

	let { results }: Props = $props();
</script>

<div class="w-full aspect-square border-2 border-black bg-white">
	<Canvas>
		<Scene3D {results} />
	</Canvas>
</div>
