<script>
    import Article from "$lib/Article.svelte";
</script>

<div class="chat-container">
    <div class="speech-bubble">
        <p>Hey daar! Hier vind je allerlei toffe artikelen over het web.</p>
    </div>
    <img src="imgs/rokertje.png" alt="rokertje" class="character">
</div>


<Article />

<style>

    img{
        width: 100%;
        max-width: 200px;
        margin-right: 20px;
        position: relative;
        left: 68%;
        margin-bottom: 0;
    }

    p{
        font-family: "Manrope", sans-serif;
    }


.chat-container {
    display: flex;
    margin: 0 auto;
    align-items: center; /* Zorgt ervoor dat alles netjes uitgelijnd blijft */
    gap: 20px; /* Ruimte tussen de spraakwolk en het character */
    max-width: 1280px; /* Zorgt ervoor dat het niet te breed wordt */
}

.speech-bubble {
    position: absolute;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    left: 33%;
    top: 20%;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #4caf50; /* Groene rand */
}

.speech-bubble p{
    overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .1em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--primary-color); }
}


/* Pixel character naast de tekst */
.character {
    width: 100px;
    height: auto;
    image-rendering: pixelated; /* Zorgt ervoor dat de pixel-art scherp blijft */
}


</style>