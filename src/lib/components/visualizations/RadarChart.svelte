<script lang="ts">
	import type { CompassResults, AxisId } from '$lib/types';
	import { axes } from '$lib/data/axes';
	import { AXES } from '$lib/types';

	interface Props {
		results: CompassResults;
	}

	let { results }: Props = $props();

	const size = 400;
	const center = size / 2;
	const radius = size / 2 - 50;

	function getPoint(axisIndex: number, value: number): { x: number; y: number } {
		const angle = (Math.PI * 2 * axisIndex) / 8 - Math.PI / 2;
		const normalizedValue = (value + 100) / 200;
		const r = radius * normalizedValue;
		return {
			x: center + r * Math.cos(angle),
			y: center + r * Math.sin(angle)
		};
	}

	function getLabelPoint(axisIndex: number): { x: number; y: number } {
		const angle = (Math.PI * 2 * axisIndex) / 8 - Math.PI / 2;
		const r = radius + 30;
		return {
			x: center + r * Math.cos(angle),
			y: center + r * Math.sin(angle)
		};
	}

	const polygonPoints = $derived(
		AXES.map((axis, i) => {
			const point = getPoint(i, results[axis as AxisId]);
			return `${point.x},${point.y}`;
		}).join(' ')
	);
</script>

<svg viewBox="0 0 {size} {size}" class="w-full h-auto max-w-[400px]">
	{#each [0.25, 0.5, 0.75, 1.0] as ratio}
		<polygon
			points={AXES.map((_, j) => {
				const p = getPoint(j, -100 + ratio * 200);
				return `${p.x},${p.y}`;
			}).join(' ')}
			fill="none"
			stroke="#e5e5e5"
			stroke-width="1"
		/>
	{/each}

	{#each AXES as _, i}
		<line
			x1={center}
			y1={center}
			x2={getPoint(i, 100).x}
			y2={getPoint(i, 100).y}
			stroke="#e5e5e5"
			stroke-width="1"
		/>
	{/each}

	<polygon points={polygonPoints} fill="rgba(0, 0, 0, 0.06)" stroke="black" stroke-width="2" />

	{#each AXES as axis, i}
		{@const point = getPoint(i, results[axis as AxisId])}
		{@const labelPoint = getLabelPoint(i)}
		{@const axisData = axes.find((a) => a.id === axis)}
		<circle cx={point.x} cy={point.y} r="5" fill="black" />
		<text
			x={labelPoint.x}
			y={labelPoint.y}
			text-anchor="middle"
			dominant-baseline="middle"
			class="text-[11px] font-medium uppercase tracking-wide fill-neutral-500"
		>
			{axisData?.name.slice(0, 4)}
		</text>
	{/each}
</svg>
