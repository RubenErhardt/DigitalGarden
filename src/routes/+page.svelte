<script>
    import showdown from 'showdown';
    export let data;

    let converter = new showdown.Converter();
    let readmeHtml = '';
    
    
    $: readmeHtml = converter.makeHtml(data.readme);

    let quotes = [
        "“The best way to predict the future is to create it.” – Alan Kay",
        "“Do not go where the path may lead, go instead where there is no path and leave a trail.” – Ralph Waldo Emerson",
        "“Digital gardens grow with you, unlike blogs which freeze in time.” – Maggie Appleton"
    ];
    let quote = quotes[Math.floor(Math.random() * quotes.length)];

</script>

<main>

<section class="more-info">
    <div class="tekst-info">
        <h2>Ruben Erhardt's <span>Digital Garden</span></h2>
        <p>Notities over het <span>web</span>, <span>WELOVEWEBS</span> en dingen die ik heb <span>geleerd.</span></p>
    </div>
</section>

<section class="hero-image">
    <img src="/imgs/output-onlinegiftools (3).gif" alt="digital-tree">
</section>

<blockquote id="random-quote">{quote}</blockquote>

<!-- <div class="readme-container">
    {@html readmeHtml}
</div> -->
</main>

<style>

main {
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
    font-weight: bold;
    margin-top: 10px;
}

blockquote {
    font-style: italic;
}

.hero-image{
    display: flex;
    justify-content: center;
    aign-items: center;
}

.hero-image img{
    width: 80%;
    height: auto;
}

.tekst-info h2{
    font-weight: bold;
}


.tekst-info span {
    font-weight: bold;
    color: var(--primary-color);
    text-shadow: 0px 0px 10px var(--primary-color);
    transition: transform 0.3s ease-in-out;
}
</style>
