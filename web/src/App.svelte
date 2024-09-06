<script>
  import { currentRoute, navigate } from "./router.js";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import AreaUpdate from "./AreaUpdate.svelte";
  import Nav from "./Nav.svelte";

  var page = "home";
  var area = 0;

  function gotoUpdate(i, a) {
    page = "update";
    area = a;
  }
</script>

<Nav />

{#if $currentRoute === "/"}
  <Home {navigate} />
{:else if $currentRoute === "/update"}
  <AreaUpdate {navigate} />
{:else if $currentRoute === "/about"}
  <About {navigate} />
{:else}
  <h2>404: Page Not Found</h2>
{/if}
