<div class="container">
    <div class="main-content">
        <article class="article">
            <h2>Vasilis van Gemert</h2>
            <ul>
                <li>10 jaar les: enthousiast, geschiedenis van hem -- kunstenaar nieuwe CSS technieken proberen, trial and error</li>
                <li>lovenonsense.com - nutteloze dingen zijn nuttig, nieuw iets kijken wat hij ermee kan</li>
                <li>Verschillende klokken: <a href="https://vasilis.nl/wowclock" target="_blank">WowClock</a> (echt heel gaaf en goofy wtf! Man houdt van klokken)</li>
                <li>Toegankelijkheid: uit de comfortzone, niet alleen de checklist. Website redesign voor blinden die veel problemen hebben met het web.</li>    
                <li>Maak toffe dingen! Wees uniek en denk aan toegankelijkheid</li>
            </ul>
            <p class="datum">02-10-2024</p>
        </article>

        <article class="article">
            <h2>Nicolas Garnier</h2>
            <ul>
                <li>Start 2012 als dev, freelance sinds 2018, creative developer, doet van alles wat</li>
                <li>Core focus: code/design, playfulness - interacties blijven beter hangen bij users</li>
                <li>Animation voor websites, actie op de site is belangrijk - zorg dat de user het wíl gebruiken</li>
                <li>Maak een website die past bij het product</li>    
                <li>Open minded, veel tijd investeren, feedback belangrijk - <a href="https://nicodotcomputer.com" target="_blank">nicodotcomputer</a></li>
            </ul>
            <p class="datum"></p>
        </article>

        <article class="article">
            <h2>Don Pieters</h2>
            <ul>
                <li>Start 2012 als dev, freelance sinds 2018, creative developer</li>
                <li>Core: code/design, playfulness - interacties blijven beter hangen bij users</li>
                <li>Animation voor websites, actie op de site is belangrijk</li>
                <li>Maak een website die past bij het product</li>    
                <li>Open minded, veel tijd investeren, feedback belangrijk</li>
            </ul>
            <p class="datum"></p>
        </article>

        <article class="article">
            <h2>Kevin's Talk over Directus</h2>
            <ul>
                <li><strong>Directus:</strong> Een backend met een op maat gemaakte UI, ontworpen om ontwikkeling eenvoudig en snel te maken.</li>
                <li><strong>Kevin's Rol:</strong> Onderwijs en extensie-ontwikkeling voor Directus.</li>
                <li><strong>Inkomstenmodellen:</strong> Hosting, licenties, cloudservices, marketplace.</li>
                <li><strong>Trade-offs:</strong> "Iron Triangle" - snel, goed en goedkoop tegelijk bestaat niet.</li>
                <li><strong>Tech Stack Keuzes:</strong> Optimalisatie voor performance en maintainability.</li>
                <li><strong>AI:</strong> Kritische houding, ethiek belangrijk.</li>
                <li><strong>SWOT-analyse en Decision Matrix:</strong> Hulpmiddelen voor projectbeslissingen.</li>
                <li><strong>Voor Developers:</strong> Directus is flexibel, maar niet altijd de beste CMS-oplossing.</li>
                <li><strong>Les:</strong> Fouten maken is onvermijdelijk, maar essentieel voor groei.</li>
            </ul>
            <p class="datum">02-10-2024</p>
        </article>

        <article class="article">
            <h2>Shyanta Vleugel - Triple (Techlead)</h2>
            <p><strong>Datum:</strong> 16/10/15:22</p>
            <p><strong>Werkt bij:</strong> Triple</p>
            <p><strong>Functie:</strong> Techlead</p>
            <p><strong>E-mail:</strong> <a href="mailto:s.vleugel@wearetriple.com">s.vleugel@wearetriple.com</a></p>
            <p><strong>Locatie:</strong> Nederland</p>
            
            <h3>Algemene Bedrijfscultuur</h3>
            <ul>
                <li><strong>Gezelligheid:</strong> Cultuur draait om een fijne werksfeer.</li>
                <li><strong>Up-to-date blijven:</strong> Minstens twee keer per jaar naar conferenties.</li>
            </ul>

            <h3>Webteam en Technologieën</h3>
            <h4>1. Webteam</h4>
            <ul>
                <li><strong>Technologieën:</strong> React en React Native.</li>
                <li><strong>Nieuwe projecten:</strong> Svelte voor minder afhankelijkheden.</li>
                <li><strong>Oude projecten:</strong> React blijft de standaard.</li>
                <li><strong>SmartTV team:</strong> Werkt met oude browsers.</li>
            </ul>

            <h4>2. React Native Team</h4>
            <ul>
                <li><strong>React Native:</strong> Basiskennis van React vereist.</li>
            </ul>

            <h3>Specifieke Werkwijze bij Triple</h3>
            <ul>
                <li><strong>Kerntechnologieën:</strong> HTML, CSS, JavaScript (TypeScript).</li>
                <li><strong>Tech Stack Kiezen:</strong> Afhankelijk van SEO, performance en animatievereisten.</li>
            </ul>

            <h3>Tech Tips</h3>
            <ul>
                <li><strong>Don't repeat yourself:</strong> Componenten hergebruiken voor efficiëntie.</li>
                <li><strong>Anatomisch coderen:</strong> Logische componentstructuur.</li>
                <li><strong>Componenten:</strong> Webcomponents zijn heilig.</li>
                <li><strong>Basisprincipes:</strong> Eerst de fundamentele skills beheersen.</li>
            </ul>
        </article>
    </div>
</div>


<style>
    .container {
    max-width: 900px;
    margin: 0 auto;
}

/* Main-content opmaak */
.main-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Artikel stijl */
.article {
    border-left: 5px solid var(--primary-color, #009688);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Hover effect voor artikelen */
.article:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
}

/* Titels van artikelen */
.article h2 {
    font-size: 22px;
    color: #222;
    margin-bottom: 10px;
}

/* Datumstijl */
.article .datum {
    font-size: 14px;
    color: gray;
    font-style: italic;
    text-align: right;
    margin-top: 10px;
}

/* Lijststijl voor bullet points */
.article ul {
    padding-left: 20px;
}

.article ul li {
    margin-bottom: 8px;
    padding-left: 5px;
    position: relative;
}

/* Fancy bullet points */
.article ul li::before {
    content: "•";
    color: var(--primary-color, #009688);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}


/* Email links */
.article a {
    color: var(--primary-color, #009688);
    text-decoration: none;
    font-weight: bold;
}

.article a:hover {
    text-decoration: underline;
}

/* Styling voor subkopjes */
.article h3, .article h4 {
    margin-top: 15px;
    font-size: 18px;
    color: #444;
}


/* Responsieve weergave */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    .article {
        padding: 15px;
    }

    .article h2 {
        font-size: 20px;
    }
}
</style>