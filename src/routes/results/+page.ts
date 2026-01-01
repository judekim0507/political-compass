import type { PageLoad } from './$types';
import { decodeResults } from '$lib/utils/url-encoder';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ url }) => {
	const encoded = url.searchParams.get('r');

	if (!encoded) {
		throw redirect(307, '/');
	}

	const results = decodeResults(encoded);

	if (!results) {
		throw redirect(307, '/');
	}

	return { results, encoded };
};
