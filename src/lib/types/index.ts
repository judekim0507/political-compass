export type AxisId =
	| 'economic'
	| 'civil'
	| 'diplomatic'
	| 'social'
	| 'technological'
	| 'environmental'
	| 'governance'
	| 'justice';

export interface Axis {
	id: AxisId;
	name: string;
	leftLabel: string;
	rightLabel: string;
	leftColor: string;
	rightColor: string;
}

export type CompassResults = Record<AxisId, number>;

export interface AxisWeight {
	axis: AxisId;
	weight: number;
	direction: 1 | -1;
}

export interface Question {
	id: number;
	text: string;
	category: string;
	weights: AxisWeight[];
}

export type LikertResponse = -2 | -1 | 0 | 1 | 2;

export interface Answer {
	questionId: number;
	response: LikertResponse;
}

export interface HistoricalFigure {
	id: string;
	name: string;
	era: string;
	description: string;
	scores: CompassResults;
}

export interface FigureSimilarity {
	figure: HistoricalFigure;
	similarity: number;
}

export const AXES: AxisId[] = [
	'economic',
	'civil',
	'diplomatic',
	'social',
	'technological',
	'environmental',
	'governance',
	'justice'
];
