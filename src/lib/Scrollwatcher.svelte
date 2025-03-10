
<div class="scroll-watcher"></div>
<main>
   
</main>

<style>
.scroll-watcher{
    height: 10px;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: var(--primary-color);
    transform-origin: left;
    width: 100%;
    scale: 0 1;
    animation: scroll-watcher linear;
    animation-timeline: view();
animation-range: contain;
    animation-timeline: scroll()
}


@keyframes scroll-watcher{
    to { scale: 1 1;}
}
</style>