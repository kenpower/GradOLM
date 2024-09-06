<script>
  import Home from "./Home.svelte";
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
{#if page === "home"}
  <Home {gotoUpdate} />
{:else if page === "update"}
  <AreaUpdate {area} />
{:else}
  <p>404 Not Found</p>
{/if}
