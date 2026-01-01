<script lang="ts">
	import type { Question, LikertResponse } from '$lib/types';
	import LikertScale from './LikertScale.svelte';

	interface Props {
		question: Question;
		currentAnswer: LikertResponse | null;
		onAnswer: (response: LikertResponse) => void;
	}

	let { question, currentAnswer, onAnswer }: Props = $props();
</script>

<div class="space-y-8">
	<div class="space-y-4">
		<span class="text-sm font-medium text-neutral-500 uppercase tracking-wide">
			{question.category}
		</span>
		<p class="text-xl sm:text-2xl font-medium leading-relaxed">
			{question.text}
		</p>
	</div>
	<LikertScale value={currentAnswer} onselect={onAnswer} />
</div>
