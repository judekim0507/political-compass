import type { CompassResults, AxisId } from '$lib/types';
import { AXES } from '$lib/types';

export function encodeResults(results: CompassResults): string {
	const values = AXES.map((axis) => {
		const normalized = Math.round((results[axis] + 100) / 2);
		return normalized.toString(16).padStart(2, '0');
	});
	return values.join('');
}

export function decodeResults(encoded: string): CompassResults | null {
	if (encoded.length !== 16) return null;

	try {
		const results = {} as CompassResults;
		for (let i = 0; i < AXES.length; i++) {
			const hex = encoded.slice(i * 2, i * 2 + 2);
			const normalized = parseInt(hex, 16);
			results[AXES[i] as AxisId] = normalized * 2 - 100;
		}
		return results;
	} catch {
		return null;
	}
}
