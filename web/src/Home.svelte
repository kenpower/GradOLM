<script>
  import AreaCard from "./AreaCard.svelte";
  import { skillAreas } from "./data.js";

  //export let gotoUpdate;
  export let navigate;
</script>

<h1>Home</h1>

<button on:click={() => navigate("/prioritise")}>Prioritise Learning</button>

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
  button {
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: normal;
    max-width: 100%;
    text-wrap: unset !important;
    align-items: center;
    anchor-name: none;
    background-color: rgb(26, 115, 232);
    border-radius: 36px;
    border-width: 0px;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    field-sizing: fixed;
    fill: #fff;
    font-size-adjust: none;
    inset-area: none;
    justify-content: center;
    min-block-size: 36px;
    min-height: 36px;
    min-inline-size: 36px;
    min-width: 36px;
    padding-inline: 15px;
    position: relative;
    position-try: none;
    position-visibility: always;
    ruby-align: space-around;
    text-decoration: none solid #fff;
    text-spacing-trim: normal;
    unicode-bidi: isolate;
    view-transition-class: none;
    margin: 1em;
  }
</style>
