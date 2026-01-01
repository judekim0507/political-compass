<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		onclick?: () => void;
		children: Snippet;
	}

	let { variant = 'primary', size = 'md', disabled = false, onclick, children }: Props = $props();
</script>

<button
	class="font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border)] focus-visible:ring-offset-2
		{variant === 'primary' ? 'bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-80 disabled:opacity-40' : ''}
		{variant === 'secondary' ? 'bg-[var(--bg)] text-[var(--fg)] border-2 border-[var(--border)] hover:bg-[var(--bg-subtle)] disabled:opacity-40' : ''}
		{variant === 'ghost' ? 'bg-transparent text-[var(--fg)] hover:bg-[var(--bg-subtle)] disabled:opacity-40' : ''}
		{size === 'sm' ? 'px-4 py-2 text-sm' : ''}
		{size === 'md' ? 'px-6 py-3 text-sm' : ''}
		{size === 'lg' ? 'px-8 py-4 text-base' : ''}"
	{disabled}
	{onclick}
>
	{@render children()}
</button>
