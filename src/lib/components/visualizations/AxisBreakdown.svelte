<script lang="ts">
	import type { CompassResults, AxisId } from '$lib/types';
	import { axes } from '$lib/data/axes';

	interface Props {
		results: CompassResults;
	}

	let { results }: Props = $props();
</script>

<div class="space-y-5">
	{#each axes as axis}
		{@const value = results[axis.id as AxisId]}
		{@const percentage = (value + 100) / 2}
		{@const isLeft = value < 0}
		<div class="space-y-2">
			<div class="flex justify-between items-baseline">
				<span class="text-sm font-medium">{axis.name}</span>
				<span class="text-sm tabular-nums" style="color: {isLeft ? axis.leftColor : axis.rightColor}">
					{value > 0 ? '+' : ''}{Math.round(value)}
				</span>
			</div>
			<div class="relative h-2 bg-[var(--bg-subtle)]">
				<div class="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-subtle)]"></div>
				{#if value !== 0}
					<div
						class="absolute top-0 bottom-0 transition-all"
						style="
							background-color: {isLeft ? axis.leftColor : axis.rightColor};
							{isLeft ? `right: 50%; width: ${Math.abs(value) / 2}%` : `left: 50%; width: ${value / 2}%`}
						"
					></div>
				{/if}
			</div>
			<div class="flex justify-between text-xs text-[var(--fg-subtle)]">
				<span>{axis.leftLabel}</span>
				<span>{axis.rightLabel}</span>
			</div>
		</div>
	{/each}
</div>
