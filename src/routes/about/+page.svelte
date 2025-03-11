<script>
    import showdown from 'showdown';
    export let data;
    import { onMount } from "svelte";

    let converter = new showdown.Converter();
    let readmeHtml = '';
    
    
    $: readmeHtml = converter.makeHtml(data.readme);
</script>

<main>
<div class="readme-container">
    {@html readmeHtml}
</div>
</main>

<style>
    main{
        max-width: 1280px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
</style>