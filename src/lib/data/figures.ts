import type { HistoricalFigure } from '$lib/types';

export const historicalFigures: HistoricalFigure[] = [
	{
		id: 'gandhi',
		name: 'Mahatma Gandhi',
		era: '1869–1948',
		description: 'Indian independence leader and advocate of nonviolent resistance',
		scores: {
			economic: -25,
			civil: -55,
			diplomatic: -15,
			social: -30,
			technological: -40,
			environmental: 35,
			governance: -60,
			justice: -70
		}
	},
	{
		id: 'thatcher',
		name: 'Margaret Thatcher',
		era: '1925–2013',
		description: 'British Prime Minister known for free-market economic reforms',
		scores: {
			economic: 75,
			civil: 35,
			diplomatic: -30,
			social: -45,
			technological: 25,
			environmental: -50,
			governance: 40,
			justice: 55
		}
	},
	{
		id: 'marx',
		name: 'Karl Marx',
		era: '1818–1883',
		description: 'German philosopher and economist who developed the theory of communism',
		scores: {
			economic: -90,
			civil: -10,
			diplomatic: 55,
			social: 60,
			technological: 30,
			environmental: 0,
			governance: 25,
			justice: -35
		}
	},
	{
		id: 'jefferson',
		name: 'Thomas Jefferson',
		era: '1743–1826',
		description: 'American Founding Father emphasizing individual liberty and limited government',
		scores: {
			economic: 20,
			civil: -75,
			diplomatic: -35,
			social: 15,
			technological: 35,
			environmental: 20,
			governance: -70,
			justice: -25
		}
	},
	{
		id: 'fdr',
		name: 'Franklin D. Roosevelt',
		era: '1882–1945',
		description: 'American President who expanded the federal government through the New Deal',
		scores: {
			economic: -45,
			civil: 15,
			diplomatic: 40,
			social: 30,
			technological: 25,
			environmental: 10,
			governance: 55,
			justice: -20
		}
	},
	{
		id: 'mandela',
		name: 'Nelson Mandela',
		era: '1918–2013',
		description: 'South African anti-apartheid revolutionary and President',
		scores: {
			economic: -35,
			civil: -45,
			diplomatic: 50,
			social: 55,
			technological: 10,
			environmental: 15,
			governance: 20,
			justice: -55
		}
	},
	{
		id: 'rand',
		name: 'Ayn Rand',
		era: '1905–1982',
		description: 'Russian-American philosopher who developed Objectivism',
		scores: {
			economic: 90,
			civil: -60,
			diplomatic: -25,
			social: 20,
			technological: 55,
			environmental: -65,
			governance: -55,
			justice: 30
		}
	},
	{
		id: 'chomsky',
		name: 'Noam Chomsky',
		era: '1928–',
		description: 'American linguist and libertarian socialist political commentator',
		scores: {
			economic: -70,
			civil: -80,
			diplomatic: 35,
			social: 65,
			technological: 15,
			environmental: 45,
			governance: -65,
			justice: -60
		}
	},
	{
		id: 'mlk',
		name: 'Martin Luther King Jr.',
		era: '1929–1968',
		description: 'American civil rights leader who advocated for nonviolent protest',
		scores: {
			economic: -40,
			civil: -65,
			diplomatic: 30,
			social: 55,
			technological: 5,
			environmental: 10,
			governance: 15,
			justice: -65
		}
	},
	{
		id: 'reagan',
		name: 'Ronald Reagan',
		era: '1911–2004',
		description: 'American President who championed conservative economic policies',
		scores: {
			economic: 70,
			civil: 25,
			diplomatic: -40,
			social: -50,
			technological: 30,
			environmental: -45,
			governance: 30,
			justice: 50
		}
	},
	{
		id: 'keynes',
		name: 'John Maynard Keynes',
		era: '1883–1946',
		description: 'British economist who advocated for government intervention in markets',
		scores: {
			economic: -40,
			civil: -15,
			diplomatic: 45,
			social: 35,
			technological: 20,
			environmental: 0,
			governance: 50,
			justice: -15
		}
	},
	{
		id: 'hayek',
		name: 'Friedrich Hayek',
		era: '1899–1992',
		description: 'Austrian-British economist and philosopher of classical liberalism',
		scores: {
			economic: 80,
			civil: -55,
			diplomatic: 25,
			social: 10,
			technological: 35,
			environmental: -30,
			governance: -60,
			justice: 15
		}
	},
	{
		id: 'friedman',
		name: 'Milton Friedman',
		era: '1912–2006',
		description: 'American economist and advocate of free-market capitalism',
		scores: {
			economic: 85,
			civil: -45,
			diplomatic: 20,
			social: 15,
			technological: 40,
			environmental: -35,
			governance: -50,
			justice: 20
		}
	},
	{
		id: 'orwell',
		name: 'George Orwell',
		era: '1903–1950',
		description: 'British writer who criticized totalitarianism and championed democratic socialism',
		scores: {
			economic: -50,
			civil: -75,
			diplomatic: 15,
			social: 35,
			technological: -30,
			environmental: 20,
			governance: -45,
			justice: -40
		}
	},
	{
		id: 'locke',
		name: 'John Locke',
		era: '1632–1704',
		description: 'English philosopher foundational to liberal political theory',
		scores: {
			economic: 35,
			civil: -70,
			diplomatic: -20,
			social: 20,
			technological: 15,
			environmental: 5,
			governance: -55,
			justice: -30
		}
	},
	{
		id: 'burke',
		name: 'Edmund Burke',
		era: '1729–1797',
		description: 'Irish-British statesman considered the father of modern conservatism',
		scores: {
			economic: 30,
			civil: -25,
			diplomatic: -35,
			social: -65,
			technological: -20,
			environmental: 15,
			governance: 25,
			justice: 10
		}
	},
	{
		id: 'luxemburg',
		name: 'Rosa Luxemburg',
		era: '1871–1919',
		description: 'Polish-German Marxist theorist and revolutionary socialist',
		scores: {
			economic: -85,
			civil: -55,
			diplomatic: 60,
			social: 65,
			technological: 20,
			environmental: 10,
			governance: -35,
			justice: -45
		}
	},
	{
		id: 'bismarck',
		name: 'Otto von Bismarck',
		era: '1815–1898',
		description: 'Prussian statesman who unified Germany through realpolitik',
		scores: {
			economic: 15,
			civil: 55,
			diplomatic: -55,
			social: -50,
			technological: 25,
			environmental: -25,
			governance: 70,
			justice: 45
		}
	},
	{
		id: 'rawls',
		name: 'John Rawls',
		era: '1921–2002',
		description: 'American political philosopher known for his theory of justice as fairness',
		scores: {
			economic: -45,
			civil: -40,
			diplomatic: 30,
			social: 45,
			technological: 10,
			environmental: 20,
			governance: 25,
			justice: -50
		}
	},
	{
		id: 'nozick',
		name: 'Robert Nozick',
		era: '1938–2002',
		description: 'American philosopher who defended libertarian principles',
		scores: {
			economic: 75,
			civil: -80,
			diplomatic: -15,
			social: 25,
			technological: 30,
			environmental: -25,
			governance: -75,
			justice: 5
		}
	}
];
