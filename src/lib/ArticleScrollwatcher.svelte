<section class="blog-article">
  <h2>Scroll-watcher met moderne CSS</h2>

  <p>Een scroll-watcher is een simpele balk bovenaan je scherm die laat zien hoe ver je bent op de pagina. Handig als je lange teksten hebt, zoals een blog of artikel. Het geeft wat meer overzicht, zonder dat het afleidt. En het mooiste: je kunt het bouwen met alleen CSS. Geen JavaScript nodig.</p>

  <h3>Wat doet het?</h3>
  <p>Terwijl je scrolt, vult de balk zich van links naar rechts. Het reageert op je scrollpositie, dus je ziet precies hoeveel je nog te gaan hebt. Subtiel, maar het voegt wel iets toe aan de ervaring.</p>

  <h3>Hoe werkt het?</h3>
  <p>Met de nieuwste CSS-features zoals <code>animation-timeline</code> kun je animaties koppelen aan je scroll. Dat ziet er niet alleen vloeiend uit, maar scheelt ook extra code.</p>

  <pre><code>&lt;div class="scroll-watcher"&gt;&lt;/div&gt;

<pre><code>{`.scroll-watcher {
  height: 3px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #356274;
  transform-origin: left;
  width: 100%;
  scale: 0 1;
  animation: scroll-watcher linear;
  animation-timeline: scroll();
  animation-range: contain;
}

@keyframes scroll-watcher {
  to {
    scale: 1 1;
  }
}`}</code></pre>

</code></pre>

  <h3>Waarom het handig is</h3>
  <ul>
    <li>Het maakt lange content overzichtelijker</li>
    <li>Je gebruikt alleen CSS, dus geen extra scripts</li>
    <li>Het is makkelijk toe te passen op je bestaande layout</li>
  </ul>

  <h3>Browser support</h3>
  <p>Werkt in de nieuwste Chrome, Safari en Edge. Firefox zit er (nog) niet op. Dus test even als je veel Firefoxgebruikers hebt.</p>

  <h3>Conclusie</h3>
  <p>Kleine toevoeging, groot verschil. En omdat het met CSS kan, is er eigenlijk geen reden om het niet te doen.</p>
</section>


<style>
  .blog-article {
  max-width: 700px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  font-family: system-ui, sans-serif;
}

.blog-article h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #098C18;
}

.blog-article h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
    color: #098C18;
}

.blog-article p {
  margin-bottom: 1.25rem;
  font-size: 1rem;
}

.blog-article ul {
  margin: 1rem 0 1rem 1.5rem;
  padding: 0;
  list-style: disc;
}

.blog-article li {
  margin-bottom: 0.5rem;
}

.blog-article code {
  background-color: #f6f8fa;
  padding: 0.2em 0.4em;
  font-size: 0.95em;
  border-radius: 4px;
  font-family: 'Fira Code', 'Courier New', monospace;
}


</style>