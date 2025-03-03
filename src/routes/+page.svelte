<script>
    import showdown from 'showdown';
    import Header from "$lib/Header.svelte";
    export let data;

    let converter = new showdown.Converter();
    let readmeHtml = '';
    
    
    $: readmeHtml = converter.makeHtml(data.readme);
</script>

<Header />
<main>
<section class="intro">
<h2>Ruben Erhardt's <span>Digital Garden</span></h2>
<p>Notities over het <span>web</span>, <span>WELOVEWEBS</span> en dingen die ik heb <span>geleerd.</span></p>
</section>

<div class="readme-container">
    {@html readmeHtml}
</div>
</main>

<style>
    main{
        padding: 10px;
    }

</style>
