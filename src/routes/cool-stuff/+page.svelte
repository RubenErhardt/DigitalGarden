<script>
    import Scrollwatcher from "$lib/Scrollwatcher.svelte";
    import GridGenerator from "$lib/GridGenerator.svelte";
</script>

<section class="cool-stuff-intro">
    <h1>Cool Stuff 🚀</h1>
    <p>Welkom bij de **Cool Stuff** sectie van mijn Digital Garden! Hier verzamel ik de tofste dingen die ik tegenkom –  
    van creatieve code-experimenten en handige tools tot random nerdy ontdekkingen.  
    Alles wat ik cool genoeg vind om te bewaren, krijgt hier een plek. 😎</p>
    
    <p>Blader door de collectie, ontdek nieuwe dingen en laat je inspireren. Misschien zit er iets tussen  
    wat je zelf ook wilt uitproberen! 🔥</p>
</section>

<iframe title="coolstuff" src="/coolstuff.html"></iframe>

<Scrollwatcher />

<GridGenerator />




<style>

.cool-stuff-intro {
    padding: 20px;
}

iframe {
    width: 100%;
    height: auto;
    min-height: 100vh;
    border: none;
}


</style>




