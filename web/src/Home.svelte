<script>
  import AreaCard from "./AreaCard.svelte";
  import { skillAreas } from "./data.js";

  export let gotoUpdate;
</script>

<h1>Home</h1>

{#each skillAreas as area, i}
  <div on:click={() => gotoUpdate(i)}>
    <AreaCard {area} />
  </div>
{/each}
