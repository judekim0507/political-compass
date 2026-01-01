<script lang="ts">
	import type { LikertResponse } from '$lib/types';

	interface Props {
		value: LikertResponse | null;
		onselect: (value: LikertResponse) => void;
	}

	let { value, onselect }: Props = $props();

	const options: { value: LikertResponse; label: string; short: string }[] = [
		{ value: -2, label: 'Strongly Disagree', short: 'SD' },
		{ value: -1, label: 'Disagree', short: 'D' },
		{ value: 0, label: 'Neutral', short: 'N' },
		{ value: 1, label: 'Agree', short: 'A' },
		{ value: 2, label: 'Strongly Agree', short: 'SA' }
	];
</script>

<div class="flex flex-col gap-3">
	<div class="hidden sm:flex gap-3">
		{#each options as option}
			<button
				class="flex-1 py-4 px-3 border-2 transition-all text-center
					{value === option.value
					? 'border-[var(--border)] bg-[var(--accent)] text-[var(--accent-fg)]'
					: 'border-[var(--border-subtle)] bg-[var(--bg)] text-[var(--fg-muted)] hover:border-[var(--fg-subtle)]'}"
				onclick={() => onselect(option.value)}
			>
				<span class="block text-sm font-medium">{option.label}</span>
			</button>
		{/each}
	</div>
	<div class="flex sm:hidden gap-2">
		{#each options as option}
			<button
				class="flex-1 py-4 px-2 border-2 transition-all text-center
					{value === option.value
					? 'border-[var(--border)] bg-[var(--accent)] text-[var(--accent-fg)]'
					: 'border-[var(--border-subtle)] bg-[var(--bg)] text-[var(--fg-muted)] hover:border-[var(--fg-subtle)]'}"
				onclick={() => onselect(option.value)}
			>
				<span class="block text-sm font-medium">{option.short}</span>
			</button>
		{/each}
	</div>
	<div class="flex justify-between text-xs text-[var(--fg-subtle)] px-1 sm:hidden">
		<span>Strongly Disagree</span>
		<span>Strongly Agree</span>
	</div>
</div>
