import type { Question } from '$lib/types';

export const questions: Question[] = [
	{
		id: 1,
		text: 'A society that prioritizes economic equality will inevitably sacrifice individual excellence.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.5, direction: 1 },
			{ axis: 'civil', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 2,
		text: 'Essential services like healthcare and utilities function better under public ownership than private enterprise.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.5, direction: -1 },
			{ axis: 'governance', weight: 0.7, direction: 1 }
		]
	},
	{
		id: 3,
		text: 'Billionaires are a policy failure; no individual should accumulate such disproportionate resources.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.5, direction: -1 },
			{ axis: 'civil', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 4,
		text: 'The government has no business monitoring the communications of citizens without specific warrants.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.5, direction: -1 },
			{ axis: 'governance', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 5,
		text: 'In times of national emergency, it is acceptable to temporarily suspend certain civil liberties.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.5, direction: 1 },
			{ axis: 'governance', weight: 0.7, direction: 1 }
		]
	},
	{
		id: 6,
		text: 'Individuals should be free to consume any substance they choose, regardless of its danger to themselves.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.4, direction: -1 },
			{ axis: 'social', weight: 0.6, direction: 1 }
		]
	},
	{
		id: 7,
		text: 'National borders are artificial constructs that impede the natural movement of people.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.5, direction: 1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 8,
		text: 'International institutions like the UN undermine the sovereignty of nation-states.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.4, direction: -1 },
			{ axis: 'governance', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 9,
		text: 'Global problems like climate change require surrendering some national autonomy to solve.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.3, direction: 1 },
			{ axis: 'environmental', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 10,
		text: 'Traditional family structures have proven their value across centuries and should be defended.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.5, direction: -1 },
			{ axis: 'civil', weight: 0.4, direction: 1 }
		]
	},
	{
		id: 11,
		text: 'Gender roles are primarily social constructs that should be actively deconstructed.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.4, direction: 1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 12,
		text: 'Past injustices justify present-day policies that favor historically marginalized groups.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.2, direction: 1 },
			{ axis: 'economic', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 13,
		text: 'Artificial intelligence development should be slowed until we better understand its risks.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.5, direction: -1 },
			{ axis: 'governance', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 14,
		text: 'Genetic engineering of humans should be pursued if it can eliminate disease and suffering.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.4, direction: 1 },
			{ axis: 'social', weight: 0.6, direction: 1 }
		]
	},
	{
		id: 15,
		text: 'Digital privacy matters more than the convenience that data collection enables.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.0, direction: -1 },
			{ axis: 'civil', weight: 1.1, direction: -1 }
		]
	},
	{
		id: 16,
		text: 'Economic growth must be sacrificed if necessary to address environmental degradation.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 1.5, direction: 1 },
			{ axis: 'economic', weight: 0.7, direction: -1 }
		]
	},
	{
		id: 17,
		text: 'Property rights should yield to environmental protection when the two conflict.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 1.3, direction: 1 },
			{ axis: 'civil', weight: 0.7, direction: 1 },
			{ axis: 'economic', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 18,
		text: 'Humans have an obligation to preserve nature for its own sake, not merely for human benefit.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 1.4, direction: 1 },
			{ axis: 'social', weight: 0.4, direction: 1 }
		]
	},
	{
		id: 19,
		text: 'Most government functions would be better handled at the local rather than national level.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.5, direction: -1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 20,
		text: 'Direct democracy leads to better outcomes than representative systems.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.1, direction: -1 },
			{ axis: 'civil', weight: 0.7, direction: -1 }
		]
	},
	{
		id: 21,
		text: 'Constitutional limits on government power are more important than efficient governance.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.0, direction: -1 },
			{ axis: 'civil', weight: 1.2, direction: -1 }
		]
	},
	{
		id: 22,
		text: 'The primary purpose of the justice system should be rehabilitation, not punishment.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.5, direction: -1 },
			{ axis: 'social', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 23,
		text: 'The death penalty is never an appropriate response, regardless of the crime.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.4, direction: -1 },
			{ axis: 'civil', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 24,
		text: 'Criminal behavior is primarily the result of social conditions rather than individual choice.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.2, direction: -1 },
			{ axis: 'economic', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 25,
		text: 'Public safety sometimes justifies preventive detention of individuals deemed dangerous.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.1, direction: 1 },
			{ axis: 'civil', weight: 1.0, direction: 1 }
		]
	}
];
