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
		text: 'Inheritance taxes are a legitimate tool for preventing the concentration of dynastic wealth.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.2, direction: -1 },
			{ axis: 'social', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 4,
		text: 'The minimum wage ultimately harms the workers it intends to help by reducing available jobs.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.4, direction: 1 },
			{ axis: 'governance', weight: 0.4, direction: -1 }
		]
	},
	{
		id: 5,
		text: 'Worker cooperatives represent a more ethical model of business organization than traditional corporations.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.3, direction: -1 },
			{ axis: 'governance', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 6,
		text: 'Free trade agreements benefit wealthy nations at the expense of developing economies.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 0.8, direction: -1 },
			{ axis: 'diplomatic', weight: 1.2, direction: -1 }
		]
	},
	{
		id: 7,
		text: 'A universal basic income would eliminate the dignity that comes from earning one\'s way.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.0, direction: 1 },
			{ axis: 'social', weight: 0.8, direction: -1 }
		]
	},
	{
		id: 8,
		text: 'Billionaires are a policy failure; no individual should accumulate such disproportionate resources.',
		category: 'Economic',
		weights: [
			{ axis: 'economic', weight: 1.5, direction: -1 },
			{ axis: 'civil', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 9,
		text: 'The government has no business monitoring the communications of citizens without specific warrants.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.5, direction: -1 },
			{ axis: 'governance', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 10,
		text: 'In times of national emergency, it is acceptable to temporarily suspend certain civil liberties.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.5, direction: 1 },
			{ axis: 'governance', weight: 0.7, direction: 1 }
		]
	},
	{
		id: 11,
		text: 'Hate speech laws are necessary protections, not infringements on free expression.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.2, direction: 1 },
			{ axis: 'social', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 12,
		text: 'Individuals should be free to consume any substance they choose, regardless of its danger to themselves.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.4, direction: -1 },
			{ axis: 'social', weight: 0.6, direction: 1 }
		]
	},
	{
		id: 13,
		text: 'Mandatory national service builds character and social cohesion among citizens.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.3, direction: 1 },
			{ axis: 'diplomatic', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 14,
		text: 'Privacy is an outdated concept in an age where transparency improves accountability.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.4, direction: 1 },
			{ axis: 'technological', weight: 0.7, direction: 1 }
		]
	},
	{
		id: 15,
		text: 'Restrictions on firearm ownership represent an unacceptable limitation on self-defense.',
		category: 'Civil',
		weights: [
			{ axis: 'civil', weight: 1.2, direction: -1 },
			{ axis: 'governance', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 16,
		text: 'National borders are artificial constructs that impede the natural movement of people.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.5, direction: 1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 17,
		text: 'International institutions like the UN undermine the sovereignty of nation-states.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.4, direction: -1 },
			{ axis: 'governance', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 18,
		text: 'Military intervention is sometimes necessary to prevent humanitarian catastrophes abroad.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.0, direction: 1 },
			{ axis: 'civil', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 19,
		text: 'A nation\'s first obligation is always to its own citizens, not to the international community.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.4, direction: -1 },
			{ axis: 'economic', weight: 0.4, direction: 1 }
		]
	},
	{
		id: 20,
		text: 'Cultural assimilation of immigrants should be encouraged over multiculturalism.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.0, direction: -1 },
			{ axis: 'social', weight: 1.0, direction: -1 }
		]
	},
	{
		id: 21,
		text: 'Global problems like climate change require surrendering some national autonomy to solve.',
		category: 'Diplomatic',
		weights: [
			{ axis: 'diplomatic', weight: 1.3, direction: 1 },
			{ axis: 'environmental', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 22,
		text: 'Traditional family structures have proven their value across centuries and should be defended.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.5, direction: -1 },
			{ axis: 'civil', weight: 0.4, direction: 1 }
		]
	},
	{
		id: 23,
		text: 'Religious institutions should have no special influence on government policy.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.2, direction: 1 },
			{ axis: 'civil', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 24,
		text: 'Gender roles are primarily social constructs that should be actively deconstructed.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.4, direction: 1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 25,
		text: 'A shared national identity is essential for social cohesion and mutual obligation.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.1, direction: -1 },
			{ axis: 'diplomatic', weight: 0.7, direction: -1 }
		]
	},
	{
		id: 26,
		text: 'Universities have a responsibility to expose students to uncomfortable or offensive ideas.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 0.8, direction: 1 },
			{ axis: 'civil', weight: 1.0, direction: -1 }
		]
	},
	{
		id: 27,
		text: 'Rapid social change creates instability; reform should be gradual and cautious.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.3, direction: -1 },
			{ axis: 'governance', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 28,
		text: 'Past injustices justify present-day policies that favor historically marginalized groups.',
		category: 'Social',
		weights: [
			{ axis: 'social', weight: 1.2, direction: 1 },
			{ axis: 'economic', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 29,
		text: 'Artificial intelligence development should be slowed until we better understand its risks.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.5, direction: -1 },
			{ axis: 'governance', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 30,
		text: 'Automation that eliminates jobs is a net positive if it increases overall productivity.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.3, direction: 1 },
			{ axis: 'economic', weight: 0.7, direction: 1 }
		]
	},
	{
		id: 31,
		text: 'Tech companies have become too powerful and should be broken up like monopolies of the past.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 0.8, direction: -1 },
			{ axis: 'economic', weight: 0.9, direction: -1 },
			{ axis: 'governance', weight: 0.6, direction: 1 }
		]
	},
	{
		id: 32,
		text: 'Genetic engineering of humans should be pursued if it can eliminate disease and suffering.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.4, direction: 1 },
			{ axis: 'social', weight: 0.6, direction: 1 }
		]
	},
	{
		id: 33,
		text: 'Digital privacy matters more than the convenience that data collection enables.',
		category: 'Technology',
		weights: [
			{ axis: 'technological', weight: 1.0, direction: -1 },
			{ axis: 'civil', weight: 1.1, direction: -1 }
		]
	},
	{
		id: 34,
		text: 'Economic growth must be sacrificed if necessary to address environmental degradation.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 1.5, direction: 1 },
			{ axis: 'economic', weight: 0.7, direction: -1 }
		]
	},
	{
		id: 35,
		text: 'Nuclear energy is an essential part of any realistic plan to address climate change.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 0.8, direction: 1 },
			{ axis: 'technological', weight: 0.9, direction: 1 }
		]
	},
	{
		id: 36,
		text: 'Individual lifestyle changes are less important than systemic policy changes for the environment.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 0.7, direction: 1 },
			{ axis: 'governance', weight: 1.0, direction: 1 }
		]
	},
	{
		id: 37,
		text: 'Developing nations should not be held to the same environmental standards as wealthy ones.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 0.9, direction: -1 },
			{ axis: 'diplomatic', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 38,
		text: 'Property rights should yield to environmental protection when the two conflict.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 1.3, direction: 1 },
			{ axis: 'civil', weight: 0.7, direction: 1 },
			{ axis: 'economic', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 39,
		text: 'Humans have an obligation to preserve nature for its own sake, not merely for human benefit.',
		category: 'Environment',
		weights: [
			{ axis: 'environmental', weight: 1.4, direction: 1 },
			{ axis: 'social', weight: 0.4, direction: 1 }
		]
	},
	{
		id: 40,
		text: 'Most government functions would be better handled at the local rather than national level.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.5, direction: -1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 41,
		text: 'A strong central authority is necessary to ensure consistent standards across regions.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.4, direction: 1 },
			{ axis: 'diplomatic', weight: 0.4, direction: 1 }
		]
	},
	{
		id: 42,
		text: 'Direct democracy leads to better outcomes than representative systems.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.1, direction: -1 },
			{ axis: 'civil', weight: 0.7, direction: -1 }
		]
	},
	{
		id: 43,
		text: 'Bureaucratic expertise should carry more weight than popular opinion in technical policy areas.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.2, direction: 1 },
			{ axis: 'civil', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 44,
		text: 'Constitutional limits on government power are more important than efficient governance.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 1.0, direction: -1 },
			{ axis: 'civil', weight: 1.2, direction: -1 }
		]
	},
	{
		id: 45,
		text: 'Voting should be mandatory to ensure truly representative democratic outcomes.',
		category: 'Governance',
		weights: [
			{ axis: 'governance', weight: 0.9, direction: 1 },
			{ axis: 'civil', weight: 0.8, direction: 1 }
		]
	},
	{
		id: 46,
		text: 'The primary purpose of the justice system should be rehabilitation, not punishment.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.5, direction: -1 },
			{ axis: 'social', weight: 0.5, direction: 1 }
		]
	},
	{
		id: 47,
		text: 'Victims of crimes should have significant input into the sentencing of offenders.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.2, direction: 1 },
			{ axis: 'civil', weight: 0.5, direction: -1 }
		]
	},
	{
		id: 48,
		text: 'The death penalty is never an appropriate response, regardless of the crime.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.4, direction: -1 },
			{ axis: 'civil', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 49,
		text: 'Criminal behavior is primarily the result of social conditions rather than individual choice.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.2, direction: -1 },
			{ axis: 'economic', weight: 0.6, direction: -1 }
		]
	},
	{
		id: 50,
		text: 'Public safety sometimes justifies preventive detention of individuals deemed dangerous.',
		category: 'Justice',
		weights: [
			{ axis: 'justice', weight: 1.1, direction: 1 },
			{ axis: 'civil', weight: 1.0, direction: 1 }
		]
	}
];
