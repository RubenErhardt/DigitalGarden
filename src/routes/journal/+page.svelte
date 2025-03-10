<script>
    import { onMount } from 'svelte';
    import showdown from 'showdown';
    
    export let data;

    let converter = new showdown.Converter();
    let wikiHtml = '';

    // Markdown omzetten naar HTML en ID’s fixen
    $: wikiHtml = converter.makeHtml(data.wiki).replace(
        /<h2>(.*?)<\/h2>/g, 
        (match, title) => {
            let safeId = title
                .trim()
                .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$1-$2-$3") // Fix datumformat
                .replace(/(\d{2})\/(\d{2})/, "$1-$2") 
                .replace(/\//g, "-") 
                .replace(/[^\w-]/g, '') 
                .toLowerCase(); 

            return `<h2 id="${safeId}">${title}</h2>`;
        }
    );

    let dates = [];

    // Zorg dat de lijst met data pas wordt gevuld NA het renderen
    onMount(() => {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = wikiHtml;
        dates = [...tempDiv.querySelectorAll("h2")].map(h2 => h2.id);
    });

    function scrollToDate(date) {
        let id = date
            .trim()
            .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$1-$2-$3")
            .replace(/(\d{2})\/(\d{2})/, "$1-$2") 
            .replace(/\//g, "-") 
            .replace(/[^\w-]/g, '') 
            .toLowerCase();

        let element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<main>
    <h1>📖 Journal - Wiki Logs</h1>
    
    <!-- Navigatie Menu -->
    <nav class="date-nav">
        {#each dates as date}
            <button on:click={() => scrollToDate(date)}>{date}</button>
        {/each}
        <button class="top-button" on:click={scrollToTop}>⬆ Terug naar boven</button>
    </nav>

    <!-- Wiki Content -->
    <div class="wiki-container">
        {@html wikiHtml}
    </div>
</main>

<style>
    main {
        padding: 20px;
        max-width: 1280px;
        margin: 0 auto;
    }

    .date-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }

    .date-nav button {
        background-color: var(--primary-color);
        color: white;
        font-weight: bold;
        border: none;
        padding: 3px 10px;
        cursor: pointer;
        border-radius: 5px;
    }

    .top-button {
        margin-left: auto;
        position: fixed;
        left: 10px;
        top: 90%;
        background-color: var(--secondary-color, #444);
    }

    .top-button:hover, .date-nav button:hover {
        background-color: var(--hover-color, #666);
    }
</style>
