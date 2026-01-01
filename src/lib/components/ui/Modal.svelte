<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		open: boolean;
		title: string;
		onconfirm: () => void;
		oncancel: () => void;
		confirmText?: string;
		cancelText?: string;
		children: Snippet;
	}

	let {
		open,
		title,
		onconfirm,
		oncancel,
		confirmText = 'Confirm',
		cancelText = 'Cancel',
		children
	}: Props = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			oncancel();
		}
	}
</script>

<svelte:window onkeydown={open ? handleKeydown : undefined} />

{#if open}
	<div class="fixed inset-0 z-50">
		<button
			class="absolute inset-0 bg-black/50"
			onclick={oncancel}
			aria-label="Close modal"
		></button>

		<div class="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
			<div class="bg-white border-2 border-black w-full max-w-sm pointer-events-auto">
				<div class="p-6 space-y-4">
					<h2 class="text-lg font-semibold">{title}</h2>
					<div class="text-neutral-600">
						{@render children()}
					</div>
				</div>
				<div class="flex border-t-2 border-black">
					<button
						onclick={oncancel}
						class="flex-1 px-6 py-4 text-sm font-medium hover:bg-neutral-100 transition-colors border-r-2 border-black"
					>
						{cancelText}
					</button>
					<button
						onclick={onconfirm}
						class="flex-1 px-6 py-4 text-sm font-medium bg-black text-white hover:bg-neutral-800 transition-colors"
					>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
