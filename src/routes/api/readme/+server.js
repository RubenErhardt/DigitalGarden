import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'RubenErhardt';
const REPO = 'DigitalGarden';

export async function GET() {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/readme`;
    console.log('🔹 Fetching from:', url);

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        const data = await response.json();
        console.log('🔹 API Response:', data);

        if (!response.ok) {
            return json({ error: data.message || 'Failed to fetch README' }, { status: response.status });
        }

        // 🔥 Hier fixen we het Base64 probleem
        const content = Buffer.from(data.content, 'base64').toString('utf-8');
        console.log('🔹 Decoded README Content:', content);

        return json({ readme: content });

    } catch (error) {
        console.error('❌ Fetch Error:', error);
        return json({ error: 'Server error' }, { status: 500 });
    }
}
