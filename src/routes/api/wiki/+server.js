import { json } from '@sveltejs/kit';
import { GITHUB_TOKEN } from '$env/static/private';

const OWNER = 'RubenErhardt';
const REPO = 'Cosmetique-Totale-Stage';
const PAGE = 'Learning-Journal---Notes---Stage-Cosmetique‐Totale';

export async function GET() {
    const url = `https://raw.githubusercontent.com/wiki/${OWNER}/${REPO}/${PAGE}.md`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json'
            }
        });

        const content = await response.text();

        if (!response.ok) {
            return json({ error: 'Failed to fetch Wiki page' }, { status: response.status });
        }

        return json({ wiki: content });

    } catch (error) {
        return json({ error: 'Server error' }, { status: 500 });
    }
}
