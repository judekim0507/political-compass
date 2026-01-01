import type { Axis } from '$lib/types';

export const axes: Axis[] = [
	{
		id: 'economic',
		name: 'Economic',
		leftLabel: 'Equality',
		rightLabel: 'Markets',
		leftColor: '#dc2626',
		rightColor: '#2563eb'
	},
	{
		id: 'civil',
		name: 'Civil',
		leftLabel: 'Liberty',
		rightLabel: 'Authority',
		leftColor: '#16a34a',
		rightColor: '#9333ea'
	},
	{
		id: 'diplomatic',
		name: 'Diplomatic',
		leftLabel: 'Nation',
		rightLabel: 'Globe',
		leftColor: '#ea580c',
		rightColor: '#0891b2'
	},
	{
		id: 'social',
		name: 'Social',
		leftLabel: 'Tradition',
		rightLabel: 'Progress',
		leftColor: '#7c3aed',
		rightColor: '#ec4899'
	},
	{
		id: 'technological',
		name: 'Technology',
		leftLabel: 'Caution',
		rightLabel: 'Acceleration',
		leftColor: '#64748b',
		rightColor: '#06b6d4'
	},
	{
		id: 'environmental',
		name: 'Environment',
		leftLabel: 'Growth',
		rightLabel: 'Ecology',
		leftColor: '#78716c',
		rightColor: '#22c55e'
	},
	{
		id: 'governance',
		name: 'Governance',
		leftLabel: 'Local',
		rightLabel: 'Central',
		leftColor: '#f59e0b',
		rightColor: '#6366f1'
	},
	{
		id: 'justice',
		name: 'Justice',
		leftLabel: 'Rehabilitate',
		rightLabel: 'Punish',
		leftColor: '#14b8a6',
		rightColor: '#ef4444'
	}
];

export const axisMap = new Map(axes.map((a) => [a.id, a]));
