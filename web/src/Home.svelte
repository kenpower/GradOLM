<script>
  import AreaCard from "./AreaCard.svelte";
  import { skillAreas } from "./data.js";

  //export let gotoUpdate;
  export let navigate;
</script>

<h1>Home</h1>

<div>
  <button on:click={() => navigate("/about", "Hello world")}
    >Go to About Page</button
  >
</div>

<div class="areagrid">
  {#each skillAreas as area, i}
    <div on:click={() => gotoUpdate(i, area)}>
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
