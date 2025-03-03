export async function load({ fetch }) {
    // Haal README op
    const readmeRes = await fetch('/api/readme');
    const readmeData = await readmeRes.json();
    return {
        readme: readmeData.readme || '❌ Geen README ontvangen!',
    };
}
