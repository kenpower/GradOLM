<script>
  import Home from "./Home.svelte";
  import Update from "./Update.svelte";
  import Nav from "./Nav.svelte";

  var page = "home";
  var area = 0;

  function gotoUpdate(i) {
    page = "update";
    area = i;
  }
</script>

<Nav />
{#if page === "home"}
  <Home {gotoUpdate} />
{:else if page === "update"}
  <Update {area} />
{:else}
  <p>404 Not Found</p>
{/if}
