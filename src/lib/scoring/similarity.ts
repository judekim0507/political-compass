import type { CompassResults, FigureSimilarity } from '$lib/types';
import { historicalFigures } from '$lib/data/figures';
import { AXES } from '$lib/types';

function euclideanDistance(a: CompassResults, b: CompassResults): number {
	let sumSquares = 0;
	for (const axis of AXES) {
		const diff = a[axis] - b[axis];
		sumSquares += diff * diff;
	}
	return Math.sqrt(sumSquares);
}

export function findSimilarFigures(results: CompassResults, limit: number = 5): FigureSimilarity[] {
	const maxDistance = Math.sqrt(8 * Math.pow(200, 2));

	return historicalFigures
		.map((figure) => {
			const distance = euclideanDistance(results, figure.scores);
			const similarity = ((maxDistance - distance) / maxDistance) * 100;
			return { figure, similarity };
		})
		.sort((a, b) => b.similarity - a.similarity)
		.slice(0, limit);
}
