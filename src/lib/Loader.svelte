<script>
  export let loading = true;
</script>

<div class="loader-screen" class:visible={loading}>
  <h1 class="brand-title">
    <span>D</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span>&nbsp;
    <span>G</span><span>a</span><span>r</span><span>d</span><span>e</span><span>n</span>&nbsp;
    <span>b</span><span>y</span>&nbsp;
    <span class="glitch">R</span><span class="glitch">u</span><span class="glitch">b</span><span class="glitch">e</span><span class="glitch">n</span>&nbsp;
<span class="glitch">E</span><span class="glitch">r</span><span class="glitch">h</span><span class="glitch">a</span><span class="glitch">r</span><span class="glitch">d</span><span class="glitch">t</span>

  </h1>
  <div class="walking-guy-header"></div>
</div>

<style>
.loader-screen {
  position: fixed;
  inset: 0;
  background-color: var(--background-color);
  background-image: var(--background-image);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s ease;
}

.loader-screen:not(.visible) {
  opacity: 0;
  pointer-events: none;
}

.brand-title {
  display: flex;
  color: var(--primary-color);
  font-family:ArcadeClassic, sans-serif;
  flex-wrap: wrap;
   font-size: 4rem;
 gap: 3px;
}

.brand-title span {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 1s forwards;
}

.brand-title span:nth-child(n) {
  animation-delay: calc(0.05s * var(--i));
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Set custom property for delays */
.brand-title span {
  --i: 1;
}
.brand-title span:nth-child(1) { --i: 1; }
.brand-title span:nth-child(2) { --i: 2; }
.brand-title span:nth-child(3) { --i: 3; }
.brand-title span:nth-child(4) { --i: 4; }
.brand-title span:nth-child(5) { --i: 5; }
.brand-title span:nth-child(6) { --i: 6; }
.brand-title span:nth-child(7) { --i: 7; }
.brand-title span:nth-child(8) { --i: 8; }
.brand-title span:nth-child(9) { --i: 9; }
.brand-title span:nth-child(10) { --i: 10; }
.brand-title span:nth-child(11) { --i: 11; }
.brand-title span:nth-child(12) { --i: 12; }
.brand-title span:nth-child(13) { --i: 13; }
.brand-title span:nth-child(14) { --i: 14; }
.brand-title span:nth-child(15) { --i: 15; }
.brand-title span:nth-child(16) { --i: 16; }
.brand-title span:nth-child(17) { --i: 17; }
.brand-title span:nth-child(18) { --i: 18; }
.brand-title span:nth-child(19) { --i: 19; }
.brand-title span:nth-child(20) { --i: 20; }
.brand-title span:nth-child(21) { --i: 21; }
.brand-title span:nth-child(22) { --i: 22; }
.brand-title span:nth-child(23) { --i: 23; }
.brand-title span:nth-child(24) { --i: 24; }
.brand-title span:nth-child(25) { --i: 25; }
.brand-title span:nth-child(26) { --i: 26; }
.brand-title span:nth-child(27) { --i: 27; }

@media (max-width: 768px) {
  .brand-title {
    font-size: 3rem;
    gap: 2px;
  }
}

@media (max-width: 480px) {
  .brand-title {
    padding: 20px;
    font-size: 2rem;
    transform: translateY(-100%);
    text-align: center;
    justify-content: center;
  }
}

</style>
