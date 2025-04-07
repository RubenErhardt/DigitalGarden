<script>
    import showdown from 'showdown';
    export let data;
    import { onMount } from "svelte";
   

    let converter = new showdown.Converter();
    let readmeHtml = '';
    let lastUpdated = new Date().toLocaleDateString('nl-NL', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
    
    
    $: readmeHtml = converter.makeHtml(data.readme);

   let quotes = [
    "“The best way to predict the future is to create it.” – Alan Kay",
    "“Do not go where the path may lead, go instead where there is no path and leave a trail.” – Ralph Waldo Emerson",
    "“Digital gardens grow with you, unlike blogs which freeze in time.” – Maggie Appleton",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Any sufficiently advanced technology is indistinguishable from magic.” – Arthur C. Clarke",
    "“The function of good software is to make the complex appear simple.” – Grady Booch",
    "“Technology is best when it brings people together.” – Matt Mullenweg",
    "“You don’t learn to walk by following rules. You learn by doing, and by falling over.” – Richard Branson",
    "“Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.” – Mark Zuckerberg",
    "“Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.” – Antoine de Saint-Exupéry",
    "“Your mind is like a parachute. It doesn’t work if it is not open.” – Frank Zappa",
    "“Creativity is intelligence having fun.” – Albert Einstein",
    "“Everything you can imagine is real.” – Pablo Picasso",
    "“If you can’t explain it simply, you don’t understand it well enough.” – Albert Einstein",
    "“The quieter you become, the more you are able to hear.” – Rumi",
    "“Not all those who wander are lost.” – J.R.R. Tolkien",
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“A user interface is like a joke. If you have to explain it, it’s not that good.” – Martin LeBlanc",
    "“The only way to do great work is to love what you do.” – Steve Jobs",
    "“The best error message is the one that never shows up.” – Thomas Fuchs",
    "“Talk is cheap. Show me the code.” – Linus Torvalds",
    "“The road to success is always under construction.” – Lily Tomlin",
    "“Innovation distinguishes between a leader and a follower.” – Steve Jobs",
    "“Knowledge is power. Sharing knowledge is the key to unlocking that power.” – Martin Uzochukwu Ugwu",
    "“Your website is the window of your business. Keep it fresh, keep it exciting.” – Jay Conrad Levinson",
    "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill",
    "“Great things are not done by impulse, but by a series of small things brought together.” – Vincent Van Gogh",
    "“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” – Patrick McKenzie",
    "“There are two ways to write error-free programs; only the third one works.” – Alan J. Perlis",
    "“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” – Bill Gates"
];
    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    function getNextQuote() {
        let newQuote;
        do {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        } while (newQuote === quote); // Zorgt ervoor dat de nieuwe quote niet dezelfde is als de vorige

        quote = newQuote;
    }
</script>

<main>

<section class="hero">
<div class="more-info">
    <div class="tekst-info">
        <p class="intro-text">Notities over het <span>web</span>, <span>WELOVEWEBS</span> en dingen die ik heb <span>geleerd.</span> <span>Bullshit</span> die ik heb gevonden.<span>Cute Dogs</span> uploader die ook heel belangrijk is.Ik doe ook maar wat. <span>Welkom :)</span></p>
        <p class="last-updated">Laatst bijgewerkt: {lastUpdated}</p>
        
    </div>
</div>



<section class="hero-image">
    <img src="/imgs/output-onlinegiftools (3).gif" alt="digital-tree" class="tree">
    <img src="imgs/rokertje.png" alt="rokertje" class="rokertje" width="50" height="50">
</section>

</section>



<button id="random-quote" on:click={getNextQuote} style="all: unset; cursor: pointer;">
    <blockquote>
        {quote}
    </blockquote>
</button>

<section class="latest">
    <p class="latest-text"> Latest: Digital gardening &nbsp;&nbsp;|&nbsp;&nbsp; Stage @Cosmetique-Totale &nbsp;&nbsp;|</p>
</section>

</main>

<style>

main {
    padding: 10px;
    max-width: 1280px;
    margin: 0 auto;
}
.tree {
    position: relative; /* Maakt de boom de referentie */
    z-index: 3; /* Boom bovenop */
    width: 80%;
}

.rokertje {
    position: absolute;
    z-index: 2; /* Rokertje onder de boom */
    width: 50px;
    height: 70px;
    
    left: 20%; /* Plaats het rokertje naast de boom */
    top: 58%; /* Midden van de boom */
    
    animation: kiekeboe 10s infinite ease-in-out; /* Loopt continu */
}

@keyframes kiekeboe {
    0%, 100% {
        transform: rotate(-10deg) translateX(0) translateY(-50%);
    }
    50% {
        transform: rotate(-5deg) translateX(15px) translateY(-50%); /* Rokertje komt uit boom */
    }
}

@media (min-width: 522px) {
    .rokertje {
        display: none;
    }
}

@media (min-width: 580px) {
    .hero {
        display: flex;
    }
}

@media (min-width: 800px) {
    .hero {
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 700px) {
    .intro-text {
        font-size: 36px !important;
    }

    .last-updated {
        font-size: 18px !important;
    }

    .tekst-info {
        padding-left: 20px !important;
    }
}



.more-info {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: bold;
}

.tekst-info {
    margin-left: 10px;
    border-left: 5px solid var(--primary-color);
    padding-left: 10px;
    max-width: 750px;
}


.intro-text {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

.intro-text span {
    color: var(--primary-color);
    font-family: ArcadeClassic, sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 255, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

/* Hover-effect voor extra interactie */
.intro-text span:hover {
    text-shadow: 2px 2px 4px rgba(0, 255, 0, 0.7);
}


.last-updated{
    font-size: 14px;
    font-weight: bold;
    font-family: 'JetBrains Mono', monospace;
}

blockquote {
    font-style: italic;
    cursor: pointer;
}

.latest-text{
    font-size: 14px;
    font-weight: bold;
    font-family: 'JetBrains Mono', monospace;
}



.hero-image{
    display: flex;
    justify-content: center;
    aign-items: center;
}



.latest {
    overflow: hidden; /* Hides the overflow content */
    color: #000000; /* Text color */
    width: 100%;
    white-space: nowrap; /* Prevents line breaks */
}

.latest-text {
    display: inline-block;
    padding-left: 20%; /* Start the text off-screen */
    animation: latest 15s linear infinite; /* Animation settings */
}


@keyframes latest {
    from {
        transform: translateX(100%); /* Start from the right */
    }
    to {
        transform: translateX(-100%); /* End on the left */
    }
}
</style>
