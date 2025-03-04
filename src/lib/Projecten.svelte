<section class="projects">
    <section class="more-info">
        <div class="tekst-info">
            <p class="intro-text">Dit is mijn meest recente <span> Project</span></p>
            <p class="opdrachtgever">Opdrachtgever: <span><a href="https://redpers.agency.fdnd.nl/">Red Pers</a></span></p>

        </div>
    </section>
    <div class="video-container">
        <video id="project-video" muted playsinline>
            <source src="/20250304_093439.mp4" type="video/mp4">
            Je browser ondersteunt geen video.
        </video>
    </div>
</section>

<style>



.more-info {
    border-left: 5px solid var(--primary-color);
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: bold;
}

.tekst-info {
    margin-left: 10px;
}


.intro-text {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

.intro-text span, .opdrachtgever span {
    color: var(--primary-color);
    font-family: ArcadeClassic, sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 255, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

.opdrachtgever a {
    text-decoration: none;
    color: black;
    cursor: pointer;
}

/* Hover-effect voor extra interactie */
.intro-text span:hover {
    text-shadow: 2px 2px 4px rgba(0, 255, 0, 0.7);
    transform: scale(1.1);
}




/* Video-container */
.video-container {
    width: 100%;
    max-width: 400px; /* Zorgt ervoor dat het op mobiel goed blijft */
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

video {
    width: 100%;
    height: auto%;
    border-radius: 10px;
    display: block;
    opacity: 0; /* Start als onzichtbaar */
    transition: opacity 0.5s ease-in-out;
}


</style>

<script>
    import { onMount } from "svelte";

    let gsap;
    onMount(async () => {
        const module = await import("gsap");
        gsap = module.gsap;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        let video = document.getElementById("project-video");

        ScrollTrigger.create({
            trigger: video,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
                video.play();
                video.loop = true; // Video blijft loopen zolang hij in beeld is
                gsap.to(video, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                video.pause();
                video.currentTime = 0;
                gsap.to(video, { opacity: 0.5, duration: 0.5 });
            },
            onLeave: () => {
                video.pause();
                video.currentTime = 0;
                gsap.to(video, { opacity: 0.5, duration: 0.5 });
            }
        });
    });
</script>

