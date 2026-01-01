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
	class="font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
		{variant === 'primary' ? 'bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-300' : ''}
		{variant === 'secondary' ? 'bg-white text-black border-2 border-black hover:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-300' : ''}
		{variant === 'ghost' ? 'bg-transparent text-black hover:bg-neutral-100 disabled:text-neutral-300' : ''}
		{size === 'sm' ? 'px-4 py-2 text-sm' : ''}
		{size === 'md' ? 'px-6 py-3 text-sm' : ''}
		{size === 'lg' ? 'px-8 py-4 text-base' : ''}"
	{disabled}
	{onclick}
>
	{@render children()}
</button>
