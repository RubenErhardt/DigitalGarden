<script>
    import { onMount } from "svelte";

    let articles = [];

    onMount(() => {
        articles = [
            {
                title: "A CSS-Only Star Rating Component and More!",
                description: "Laat zien hoe je een sterrenbeoordelingssysteem maakt met alleen CSS, zonder JavaScript.",
                img: "/imgs/star-pattern.png",
                link: "https://css-tricks.com/a-css-only-star-rating-component-and-more-part-2/"
            },
            {
                title: "Typewriter Effect",
                description: "Leer hoe je een typemachine-effect maakt met HTML, CSS en JavaScript.",
                img: "article2.jpg",
                link: "https://css-tricks.com/snippets/css/typewriter-effect/"
            },
            {
                title: "Artikel 3",
                description: "Korte beschrijving van artikel 3.",
                img: "article3.jpg",
                link: "https://voorbeeld.com/artikel-3"
            }
        ];
    });
</script>



<section id="articles">
    {#each articles as article}
        <article class="article">
            <img src="{article.img}" alt="{article.title}" class="article-img">
            <header>
                <h2 class="article-title">{article.title}</h2>
            </header>
            <p class="article-description">{article.description}</p>
            <footer>
                <a href="{article.link}" class="article-link">Lees meer</a>
            </footer>
        </article>
    {/each}
</section>

<style>
#articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
}

.article {
    display: grid;
    grid-template-rows: auto 1fr auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    padding: 15px;
}

.article:hover {
    transform: translateY(-5px);
}

    
    .article-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }
    
    .article-title {
        font-size: 1.2rem;
        margin: 10px 0;
    }
    
    .article-description {
        font-size: 0.95rem;
        color: #555;
        margin-bottom: 15px;
    }
    
    .article-link {
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
        transition: color 0.2s;
    }
    
    .article-link:hover {
        color: #0056b3;
    }
    
</style>    