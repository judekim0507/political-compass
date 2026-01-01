import type { Answer, AxisId, CompassResults } from '$lib/types';
import { questions } from '$lib/data/questions';
import { AXES } from '$lib/types';

function initializeScores(): Record<AxisId, number> {
	return AXES.reduce(
		(acc, axis) => {
			acc[axis] = 0;
			return acc;
		},
		{} as Record<AxisId, number>
	);
}

export function calculateResults(answers: Answer[]): CompassResults {
	const rawScores = initializeScores();
	const maxScores = initializeScores();

	for (const answer of answers) {
		const question = questions.find((q) => q.id === answer.questionId);
		if (!question) continue;

		for (const weight of question.weights) {
			const contribution = answer.response * weight.weight * weight.direction;
			rawScores[weight.axis] += contribution;
			maxScores[weight.axis] += Math.abs(2 * weight.weight);
		}
	}

	const normalized = {} as CompassResults;
	for (const axis of AXES) {
		if (maxScores[axis] === 0) {
			normalized[axis] = 0;
		} else {
			normalized[axis] = (rawScores[axis] / maxScores[axis]) * 100;
		}
	}

	return normalized;
}
