<script>
    import showdown from 'showdown';
    export let data;

    let converter = new showdown.Converter();
    let readmeHtml = '';
    
    
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
