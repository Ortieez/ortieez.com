<script lang="js">
  import Router from 'svelte-spa-router';
  import Home from './lib/routes/Home.svelte';

  const routes =
    {
      "/": Home
    };
</script>

<main>
  <Router {routes}/>
</main>