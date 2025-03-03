<script>
    import { page } from '$app/stores';
</script>

<section class="header">
    <h1 class="logo">DigitalGarden</h1>
</section>

<nav id="nav-menu" class="nav-menu">
    <ul>
        <li>
            <a href="/" class={$page.url.pathname === "/" ? "active" : ""}>Home</a>
        </li>
        <li>
            <a href="/journal" class={$page.url.pathname.startsWith("/journal") ? "active" : ""}>Journal</a>
        </li>
        <li>
            <a href="/welovewebs" class={$page.url.pathname.startsWith("/welovewebs") ? "active" : ""}>WeLoveWebs</a>
        </li>
        <li>
            <a href="/github" class={$page.url.pathname.startsWith("/github") ? "active" : ""}>Github</a>
        </li>
    </ul>
</nav>

<style>

.header {
    display: flex;
    view-transition-name: header;
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
/* Standaard styling */
.nav-menu ul {
    view-transition-name: nav-menu;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width: 100%;
    margin: 0;
}

.nav-menu ul li {
    list-style: none;
    margin:  5px;
}

/* Stijl voor de links */
.nav-menu ul li a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    padding: 3px;
    border-radius: 5px;
    transition: background 0.3s ease, color 0.3s ease;
}

/* Hover-effect */
.nav-menu ul li a:hover {
    background: #f0f0f0;
}

/* Actieve link */
.nav-menu ul li a.active {
    background: rgb(9, 140, 24);
    color: white;
}
</style>





