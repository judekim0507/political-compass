import { browser } from '$app/environment';

export type Theme = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'political-compass-theme';

function getSystemTheme(): 'light' | 'dark' {
	if (!browser) return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function loadTheme(): Theme {
	if (!browser) return 'system';
	try {
		const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
		if (saved && ['system', 'light', 'dark'].includes(saved)) {
			return saved;
		}
	} catch {}
	return 'system';
}

function createThemeState() {
	let theme = $state<Theme>(loadTheme());
	const resolvedTheme = $derived(theme === 'system' ? getSystemTheme() : theme);

	function setTheme(newTheme: Theme) {
		theme = newTheme;
		if (browser) {
			try {
				localStorage.setItem(STORAGE_KEY, newTheme);
			} catch {}
			applyTheme();
		}
	}

	function applyTheme() {
		if (!browser) return;
		const resolved = theme === 'system' ? getSystemTheme() : theme;
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(resolved);
	}

	function cycle() {
		const order: Theme[] = ['system', 'light', 'dark'];
		const currentIndex = order.indexOf(theme);
		const nextIndex = (currentIndex + 1) % order.length;
		setTheme(order[nextIndex]);
	}

	if (browser) {
		applyTheme();
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (theme === 'system') {
				applyTheme();
			}
		});
	}

	return {
		get theme() {
			return theme;
		},
		get resolvedTheme() {
			return resolvedTheme;
		},
		setTheme,
		cycle
	};
}

export const themeState = createThemeState();
