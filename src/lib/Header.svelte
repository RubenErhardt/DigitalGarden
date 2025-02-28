<script>
    import Scroll from "./Scroll.svelte";
</script>
<section class="header">
    <h1 class="logo">DigitalGarden</h1>
    <Scroll />
</section>

<nav id="nav-menu" class="nav-menu">
    <ul>
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/journal">Journal</a></li>
        <li><a href="/">WeLoveWebs</a></li>
        <li><a href="/">Github</a></li>
    </ul>
</nav>


<style>
/* Header styling */
.header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid #ddd;
}

.logo {
    font-size: 1.8em;
    font-weight: bold;
    color: rgb(9, 140, 24);
    text-transform: uppercase;
}

/* Zorg dat de <ul> een flex-container is */
    .nav-menu ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
}

/* Stijl per <li> als een duidelijke navbar item */
.nav-menu ul li {
    list-style: none;
    margin: 10px 5px; /* Ruimte tussen menu-items */
}

/* Stijl voor de <a> (link) */
.nav-menu ul li a {
    text-decoration: none; /* Geen underline */
    color: #333; /* Neutrale kleur, geen paars */
    font-weight: 600;
    padding: 3px;
    border-radius: 5px; /* Ronde hoeken */
    transition: background 0.3s ease, color 0.3s ease;
}

/* Hover-effect */
.nav-menu ul li a:hover {
    background: #f0f0f0; /* Lichtgrijze achtergrond bij hover */
}

/* Active item */
.nav-menu ul li a.active {
    background: rgb(9, 140, 24); /* Actieve kleur (groen zoals logo) */
    color: white; /* Witte tekst op actieve item */
}
</style>




