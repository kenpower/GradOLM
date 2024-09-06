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

{#if $currentRoute === "/"}
  <Home {navigate} />
{:else if $currentRoute === "/update"}
  <Nav {navigate} />
  <AreaUpdate />
{:else}
  <Nav {navigate} />
  <h2>404: Page Not Found</h2>
{/if}
