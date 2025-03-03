<script>
    import showdown from 'showdown';
    import Header from "$lib/Header.svelte";
    export let data;

    let converter = new showdown.Converter();
    let readmeHtml = '';
    
    
    $: readmeHtml = converter.makeHtml(data.readme);
</script>

<Header />
<div class="readme-container">
    {@html readmeHtml}
</div>

<style>
.readme-container{
    padding: 10px;
}
</style>
