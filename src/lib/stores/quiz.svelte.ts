import { browser } from '$app/environment';
import type { Answer, LikertResponse, CompassResults } from '$lib/types';
import { questions } from '$lib/data/questions';
import { calculateResults } from '$lib/scoring/calculator';

const STORAGE_KEY = 'political-compass-progress';

function loadProgress(): { answers: Record<number, Answer>; currentIndex: number } {
	if (!browser) return { answers: {}, currentIndex: 0 };
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			const parsed = JSON.parse(saved);
			return {
				answers: parsed.answers || {},
				currentIndex: parsed.currentIndex || 0
			};
		}
	} catch {}
	return { answers: {}, currentIndex: 0 };
}

function saveProgress(answers: Record<number, Answer>, currentIndex: number) {
	if (!browser) return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, currentIndex }));
	} catch {}
}

function clearProgress() {
	if (!browser) return;
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch {}
}

function createQuizState() {
	const initial = loadProgress();
	let answers = $state<Record<number, Answer>>(initial.answers);
	let currentIndex = $state(initial.currentIndex);

	const isComplete = $derived(Object.keys(answers).length === questions.length);
	const currentQuestion = $derived(questions[currentIndex]);
	const progress = $derived({
		current: currentIndex + 1,
		total: questions.length,
		percentage: ((currentIndex + 1) / questions.length) * 100
	});
	const results = $derived.by(() => {
		if (!isComplete) return null;
		return calculateResults(Object.values(answers));
	});
	const currentAnswer = $derived.by(() => {
		const answer = answers[currentQuestion?.id];
		return answer?.response ?? null;
	});

	function answer(questionId: number, response: LikertResponse) {
		answers = { ...answers, [questionId]: { questionId, response } };
		saveProgress(answers, currentIndex);
	}

	function next() {
		if (currentIndex < questions.length - 1) {
			currentIndex++;
			saveProgress(answers, currentIndex);
		}
	}

	function previous() {
		if (currentIndex > 0) {
			currentIndex--;
			saveProgress(answers, currentIndex);
		}
	}

	function reset() {
		answers = {};
		currentIndex = 0;
		clearProgress();
	}

	function goTo(index: number) {
		currentIndex = index;
		saveProgress(answers, currentIndex);
	}

	function hasAnswer(questionId: number): boolean {
		return questionId in answers;
	}

	return {
		get answers() {
			return answers;
		},
		get currentIndex() {
			return currentIndex;
		},
		get isComplete() {
			return isComplete;
		},
		get currentQuestion() {
			return currentQuestion;
		},
		get progress() {
			return progress;
		},
		get results() {
			return results;
		},
		get currentAnswer() {
			return currentAnswer;
		},
		answer,
		next,
		previous,
		reset,
		goTo,
		hasAnswer
	};
}

export const quizState = createQuizState();
