<script>
  import Background from "../elements/Background.svelte";
  import Menu from "../elements/Menu.svelte";
  import { fade } from "svelte/transition";
</script>

<main>
  <div in:fade out:fade class="fader">
    <div class="center">
      <div class="logo">
        <img src="LogoLight.png" alt="logo" />
      </div>
      <div class="text">
        <h1>student</h1>
        <h1 class="push">developer</h1>
      </div>
    </div>

    <div class="menu">
      <Menu />
    </div>
  </div>
  <Background />
</main>

<style>
  .logo,
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .text {
    display: flex;
    flex-direction: column;
    mix-blend-mode: difference;
    font-size: 3vw;
  }

  .text h1 {
    color: #ebdbb2;
    margin: 0;
  }

  .logo img {
    width: 58.8805166846071vh;
    opacity: 0.75;
  }

  .push {
    padding-left: 5vw;
  }
</style>
