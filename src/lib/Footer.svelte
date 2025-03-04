<footer class="footer">
    <div class="footer-content">
        <p>&copy; {new Date().getFullYear()} DigitalGarden. All rights reserved.</p>
        <nav class="footer-nav">
            <a href="/privacy">Privacybeleid</a>
            <a href="/terms">Voorwaarden</a>
            <a href="/contact">Contact</a>
        </nav>
    </div>
</footer>

<style>
    .footer {
        background: #222;
        color: white;
        text-align: center;
        padding: 20px;
        font-size: 14px;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-nav {
        margin-top: 10px;
    }

    .footer-nav a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
        transition: color 0.3s ease-in-out;
    }

    .footer-nav a:hover {
        color: #00ffcc;
    }

    @media (min-width: 600px) {
        .footer-content {
            flex-direction: row;
            justify-content: space-between;
            max-width: 800px;
            margin: auto;
        }
    }
</style>
