<script>
    import { onMount } from 'svelte';

    // Reactieve variabelen voor grid-instellingen
    let columns = 3;
    let rows = 2;
    let gap = 10;

    // Functie om de grid-items dynamisch te genereren
    function generateItems() {
        let totalItems = columns * rows;
        return Array.from({ length: totalItems }, (_, i) => i + 1);
    }
</script>

<div class="intro-cssgrid">
<h1>🎨 Interactieve CSS Grid Editor</h1>
<p>
    Pas het aantal <strong>kolommen</strong>, <strong>rijen</strong> en de <strong>grid-gap</strong> aan 
    om direct te zien hoe CSS Grid werkt! De wijzigingen worden live toegepast, zodat je meteen 
    het effect op de layout kunt zien.
</p>


<div class="controls">
    <label>Kolommen: <input type="number" bind:value={columns} min="1" max="10"></label>
    <label>Rijen: <input type="number" bind:value={rows} min="1" max="10"></label>
    <label>Grid Gap (px): <input type="number" bind:value={gap} min="0" max="50"></label>
</div>

<div class="container">
    <div 
        class="grid-container" 
        style="grid-template-columns: repeat({columns}, 100px); grid-gap: {gap}px;"
    >
        {#each generateItems() as item}
            <div class="grid-item">{item}</div>
        {/each}
    </div>
</div>
</div>

<style>

    .intro-cssgrid{
        padding: 20px;
    }
    .controls {
        margin-bottom: 20px;
        display: flex;
        gap: 10px;
    }

    .controls label {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    input {
        width: 50px;
        text-align: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .grid-container {
        display: grid;
        background-color: #e1e5ee;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .grid-item {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #76c7c0;
        color: white;
        font-size: 20px;
        font-weight: bold;
        height: 100px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
</style>
