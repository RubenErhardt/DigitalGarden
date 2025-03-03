<script>
    import showdown from 'showdown';
    export let data;

    let converter = new showdown.Converter();
    let wikiHtml = '';

    // Markdown omzetten naar HTML
    $: wikiHtml = converter.makeHtml(data.wiki);
</script>

<main>
    <h1>📖 Journal - Wiki Logs</h1>
    <div class="wiki-container">
        {@html wikiHtml}
    </div>
</main>

<style>
    main {
        padding: 20px;
    }
    .wiki-container {
        padding: 20px;
        max-width: 320px;
    }

</style>
