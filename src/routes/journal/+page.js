export async function load({ fetch }) {
   // Haal Wiki op
    const wikiRes = await fetch('/api/wiki');
    const wikiData = await wikiRes.json();
    return {
        wiki: wikiData.wiki || '❌ Geen Wiki ontvangen!'
    };
}
