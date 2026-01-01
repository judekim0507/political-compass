<script lang="ts">
	import type { CompassResults } from '$lib/types';

	interface Props {
		results: CompassResults;
		size?: number;
	}

	let { results, size = 400 }: Props = $props();

	const x = $derived((results.economic / 100) * (size / 2) + size / 2);
	const y = $derived((-results.civil / 100) * (size / 2) + size / 2);
</script>

<div class="w-full max-w-[400px]">
	<div class="relative pb-4 pt-6">
		<div class="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-medium text-neutral-400 whitespace-nowrap tracking-wide uppercase">
			Authority
		</div>

		<svg viewBox="0 0 {size} {size}" class="w-full h-auto border-2 border-black">
			<rect x="0" y="0" width={size / 2} height={size / 2} fill="#fafafa" />
			<rect x={size / 2} y="0" width={size / 2} height={size / 2} fill="#f5f5f5" />
			<rect x="0" y={size / 2} width={size / 2} height={size / 2} fill="#f5f5f5" />
			<rect x={size / 2} y={size / 2} width={size / 2} height={size / 2} fill="#fafafa" />

			{#each [0.25, 0.5, 0.75] as ratio}
				<line
					x1={size * ratio}
					y1="0"
					x2={size * ratio}
					y2={size}
					stroke="#e5e5e5"
					stroke-width="1"
				/>
				<line
					x1="0"
					y1={size * ratio}
					x2={size}
					y2={size * ratio}
					stroke="#e5e5e5"
					stroke-width="1"
				/>
			{/each}

			<line x1={size / 2} y1="0" x2={size / 2} y2={size} stroke="#a3a3a3" stroke-width="1" />
			<line x1="0" y1={size / 2} x2={size} y2={size / 2} stroke="#a3a3a3" stroke-width="1" />

			<circle cx={x} cy={y} r="16" fill="black" />
			<circle cx={x} cy={y} r="10" fill="white" />
			<circle cx={x} cy={y} r="5" fill="black" />
		</svg>

		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-medium text-neutral-400 whitespace-nowrap tracking-wide uppercase">
			Liberty
		</div>
	</div>

	<div class="flex justify-between text-xs font-medium text-neutral-400 uppercase tracking-wide mt-2">
		<span>Equality</span>
		<span>Markets</span>
	</div>
</div>
