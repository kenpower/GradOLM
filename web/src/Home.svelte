<script>
  import AreaCard from "./AreaCard.svelte";
  import { skillAreas } from "./data.js";

  //export let gotoUpdate;
  export let navigate;
</script>

<h1>Home</h1>

<div class="areagrid">
  {#each skillAreas as area, i}
    <div on:click={() => navigate("/update", area)}>
      <AreaCard {area} />
    </div>
  {/each}
</div>

<style>
  .areagrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
</style>
