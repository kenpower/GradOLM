<script>
  import Stars from "./Stars.svelte";
  export let area;
</script>

<div class="card">
  <Stars filled={3} orientation={"vertical"} background_color={area.color} />
  <div class="area-body">
    <h3 style="color: {area.color}">{area.name}</h3>
    <hr />
    <ul>
      {#each area.skills as { name }}
        <li>{name}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .card {
    width: 18em;
    border-radius: 0em 2em 2em 0em;
    color: darkslategrey;
    text-align: left;
    display: flex;
    align-items: flex-end;
    background: white;
    align-items: stretch;
  }

  h3 {
    margin-top: 0em;
    margin-bottom: 0em;
    font-size: 1.2rem;
  }

  hr {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }

  .area-body {
    width: 100%;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .card ul {
    padding-left: 20px;
    margin: 0;
    font-size: 0.8rem;
  }
</style>
