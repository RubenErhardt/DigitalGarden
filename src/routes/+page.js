export const load = async ({ fetch }) => {
    
    const res = await fetch('/api/readme');
    const data = await res.json();

    return { readme: data.readme || '❌ Geen README ontvangen!' };
};
