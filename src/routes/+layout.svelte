<script>
    import { onNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    // ✅ Zorgt ervoor dat de dark mode status onthouden wordt (bijv. bij pagina-refresh)
    let isDarkMode = false;

    // Controleer of de gebruiker al eerder dark mode had aanstaan
    onMount(() => {
        isDarkMode = localStorage.getItem("darkMode") === "true";
        document.documentElement.classList.toggle("dark-mode", isDarkMode);
    });

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.documentElement.classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
    }
</script>

<!-- 🚀 Voeg de header en nav toe zodat ze persistent blijven -->
<section class="header" class:dark-mode={isDarkMode}>
    <h1 class="logo">DigitalGarden</h1>
    <h2>by <a href="https://github.com/RubenErhardt"><span>Ruben Erhardt</span></h2>
    <div class="walking-guy-header"></div>

    <button on:click={toggleDarkMode}>
        <span class="icon moon" class:active={!isDarkMode}>🌙</span>
        <span class="icon sun" class:active={isDarkMode}>🌞</span>
    </button>
</section>

<nav class="nav-menu">
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

<slot/>

<style>
/* 🌑 Dark mode */
:root.dark-mode {
    background: #121212;
    color: #fff;
}

.header {
        display: flex;
        justify-content: center;
        view-transition-name: header;
        flex-direction: column;
        position: relative;
        align-items: center;
        border-bottom: 2px solid #ddd;
    }

/* ☀️ 🌙 Button Styling */
.header button {
    position: absolute;
    right: -10px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.header h2{
    position: absolute;
    top: 40px;
    font-size: 18px;
    font-family: ArcadeClassic, sans-serif;
}

.header h2 span{
    animation: glitch 1.5s infinite alternate;
}

@keyframes glitch {
    0% {
        text-shadow: 2px 2px 0px #00ffff, -2px -2px 0px #ff0037;
    }
    50% {
        text-shadow: -2px -2px 0px #00ffff, 2px 2px 0px #ff0037;
    }
    100% {
        text-shadow: 2px -2px 0px #00ffff, -2px 2px 0px #ff0037;
    }
}

.header h2 span:hover{
    animation: none;
    cursor: pointer;
}

.header h2 a{
    text-decoration: none;
    color:black;
}




.header button:hover {
    transform: scale(1.1);
}

/* 🌙 Basisstijl voor iconen */
.header button .icon {
    position: absolute;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0;
}

/* Actieve icon toont zichzelf */
.header button .icon.active {
    opacity: 1;
    transform: rotate(360deg);
}



    .walking-guy-header {
        position: absolute;
        top: 60px;
        right: -10px;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        background: url('imgs/pngtree-boy-pixel-little-man-illustration-image_1433979-removebg-preview (1).png') no-repeat;
        background-size: cover;
        animation: walk-header 20s linear infinite;
    }

    @keyframes walk-header {
        0% {
            transform: translateY(-50%) translateX(100%);
        }
        100% {
            transform: translateY(-50%) translateX(-100vw);
        }
    }

    
.logo {
    font-size: 2em;
    font-family: ArcadeClassic, sans-serif;
    font-weight: bold;
    color: var(--primary-color);
    text-transform: uppercase;
}
/* Standaard styling */
.nav-menu ul {
    view-transition-name: nav-menu;
    display: flex;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
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
    font-weight: bold;
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
    background: var(--primary-color);
    color: white;
}
</style>
