<script>
    import { onNavigate } from '$app/navigation';
    import { page } from '$app/stores';

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<!-- 🚀 Voeg de header en nav toe zodat ze persistent blijven -->
<section class="header">
    <h1 class="logo">DigitalGarden</h1>
    <div class="walking-guy-header"></div>
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

<!-- Dit blijft hetzelfde -->
<slot/>

<style>
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

    /* 🚀 Header blijft staan */
    .header {
        display: flex;
        justify-content: center;
        view-transition-name: header;
        flex-direction: column;
        align-items: center;
        border-bottom: 2px solid #ddd;
    }

    .walking-guy-header {
        position: absolute;
        top: 58px;
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
    font-size: 1.8em;
    font-weight: bold;
    color: var(--primary-color);
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
    background: var(--primary-color);
    color: white;
}
</style>
