

<script>


    import { onNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    import gsap from 'gsap';

    onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});

    let isLoaded = false;

    onMount(() => {
        requestAnimationFrame(() => {
            gsap.to("body", {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => {
                    isLoaded = true; // Pagina is nu geladen
                }
            });

            gsap.from(".logo", {
                opacity: 0,
                y: -20,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".nav-menu ul li", {
                opacity: 0,
                y: 10,
                stagger: 0.2,
                duration: 1.2,
                ease: "power3.out"
            });

            gsap.from(".hero-image img", {
                opacity: 0,
                scale: 0.9,
                duration: 1.5,
                delay: 0.3,
                ease: "power3.out",
                stagger: 0.2
            });
        });
    });


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
            <a href="/projecten" class={$page.url.pathname.startsWith("/projecten") ? "active" : ""}>Projects</a>
        </li>
        <li>
            <a href="/cool-stuff" class={$page.url.pathname.startsWith("/cool-stuff") ? "active" : ""}>Cool-Stuff</a>
    </ul>
</nav>

<slot/>

<style>



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
        cursor: pointer;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        background: url('imgs/rokertje.png') no-repeat;
        background-size: cover;
        animation: walk-header 20s linear infinite;
    }

    .walking-guy-header::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 10%;
    width: 10px;
    height: 10px;
    background: rgba(200, 200, 200, 0.7);
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.walking-guy-header:hover::after {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.5) translateY(-10px);
    animation: smoke 1s ease-out infinite;
}

@keyframes smoke {
    0% { opacity: 1; transform: scale(1) translateY(0px); }
    100% { opacity: 0; transform: scale(2) translateY(-20px); }
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
    flex-wrap: wrap;
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

:root.dark-mode .nav-menu ul li a {
    color: white; /* Maak de tekst wit in dark mode */
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

@keyframes fade-in {
	from {
		opacity: 0;
	}
}

@keyframes fade-out {
	to {
		opacity: 0;
	}
}

@keyframes slide-from-right {
	from {
		transform: translateX(30px);
	}
}

@keyframes slide-to-left {
	to {
		transform: translateX(-30px);
	}
}

:root::view-transition-old(root) {
	animation:
		90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
		300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

:root::view-transition-new(root) {
	animation:
		210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
		300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}

@media (prefers-reduced-motion) {
	::view-transition-group(*),
	::view-transition-old(*),
	::view-transition-new(*) {
		animation: none !important;
	}
}

@media (prefers-reduced-motion: no-preference) {
	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
}


</style>
