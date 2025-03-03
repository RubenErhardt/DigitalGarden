<script>
    import showdown from 'showdown';
    export let data;

    let converter = new showdown.Converter();
    let readmeHtml = '';
    
    
    $: readmeHtml = converter.makeHtml(data.readme);
</script>

<main>

<section class="more-info">
    <div class="tekst-info">
        <h2>Ruben Erhardt's <span>Digital Garden</span></h2>
        <p>Notities over het <span>web</span>, <span>WELOVEWEBS</span> en dingen die ik heb <span>geleerd.</span></p>
    </div>
</section>


<div class="readme-container">
    {@html readmeHtml}
</div>
</main>

<style>
    main{
        padding: 10px;
    }

.more-info {
    border-left: 5px solid var(--primary-color);
    }

.tekst-info {
    margin-left: 10px;
}

.tekst-info p {
    font-size: 1.4rem;
    font-weight: 300;
    margin-top: 10px;
}


.tekst-info span {
    font-weight: bold;
    color: var(--primary-color);
    transition: transform 0.3s ease-in-out;
}

.tekst-info span:hover {
    transform: scale(1.1);
    text-shadow: 0px 0px 10px var(--primary-color);
}




</style>
