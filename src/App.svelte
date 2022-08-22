<script lang="js">
  import Router from 'svelte-spa-router';
  import Home from './lib/routes/Home.svelte';
  import About from './lib/routes/About.svelte';

  const routes =
    {
      "/": Home,
      "/about": About
    };
</script>

<main>
  <Router {routes}/>
</main>