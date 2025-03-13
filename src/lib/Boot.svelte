<div>
<p>bootje dat drijft op water. Wanneer de switch wordt ingeschakeld, beweegt het bootje soepel naar de andere kant dankzij de <code>appearance: none;</code> eigenschap.</p>

<input type="checkbox" role="switch" class="paper-ship">
</div>

<style>
    @keyframes wave {
  0%,100% { background-position: 0.1em 100%, 0.3em 100%; }
  50% { background-position: 0.6em 100%, -0.6em 100%; }
}

div{
    padding: 20px;
}

p{
    font-size: 1.3em;
    line-height: 1.6;
    font-weight: bold;
    margin-bottom: 1em;
}

@keyframes float {
  0%, 100% { top: 45%; rotate: -2deg; }
  50% { top: 50%; rotate: 2deg }
}
.paper-ship {
  appearance: none;
  font-size: 2em; /* Groter lettertype */
  width: 5em; /* Verdubbelde breedte */
  height: 2em; /* Verdubbelde hoogte */
  box-sizing: content-box;
  border: max(2px, 0.1em) solid;
  border-radius: 3em;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(100% 56% at 50% 0%, #0000 99%, #5ca8) 0 100% / 25% 60%,
    #cff;
  background-repeat: repeat-x;
}

.paper-ship::before {
  content: "";
  width: 1.8em; /* Verdubbeld */
  height: 1.8em;
  position: absolute;
  top: 50%;
  left: 1em; /* Aangepaste positie */
  transform: translate(-50%, -50%);
  border: 2px solid #0000;
  border-radius: 50%;
  transition: left 0.3s;
  background:
    conic-gradient(from -40deg at 50% 200%, #ddd 80deg, #0000 0) 0 80% / 100% 30%,
    conic-gradient(at 50% 30%, #0000 40%, #ccc 0 50%, #bbb 0 60%, #0000 0) 50% 0 / 58% 80%;
  background-repeat: no-repeat;
  animation: float 4s infinite alternate;
}

.paper-ship::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6em; /* Vergroot */
  height: 2em;
  background:
    radial-gradient(100% 58% at 50% 0%, #0000 99%, #5ca6) 10% 100% / 25% 60%,
    radial-gradient(100% 58% at 50% 0%, #0000 99%, #5ac6) 20% 100% / 25% 60%;
  background-repeat: repeat-x;
  animation: wave 6s infinite;
}

.paper-ship:checked::before {
  left: calc(100% - 1em);
}

.paper-ship[disabled],
.paper-ship[disabled]::before,
.paper-ship[disabled]::after {
  filter: grayscale(1);
  animation: none;
  transition-duration: 0s;
}

@media (prefers-reduced-motion) {
  .paper-ship,
  .paper-ship::before,
  .paper-ship::after {
    animation: none;
    transition-duration: 0s;
  }
}

</style>