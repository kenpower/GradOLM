<script>
  import { currentRoute, navigate } from "./router.js";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import AreaUpdate from "./AreaUpdate.svelte";
  import Nav from "./Nav.svelte";
  import PrioritiseLearning from "./PrioritiseLearning.svelte";
  import DragDrop from "./DragDropList.svelte";

  var page = "home";
  var area = 0;

  $: route = $currentRoute.replace("/GradOLM", "");
</script>

<Nav {navigate} />
{#if route === "/"}
  <Home {navigate} />
{:else if route === "/update"}
  <AreaUpdate />
{:else if route === "/prioritise"}
  <PrioritiseLearning />
{:else}
  <Nav {navigate} />
  <h2>404: Page Not Found</h2>
{/if}
