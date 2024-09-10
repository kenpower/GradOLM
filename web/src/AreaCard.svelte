<script>
  import Stars from "./Stars.svelte";
  export let area;
</script>

<div class="card" style="background-color: {area.color}">
  <h3>{area.name}</h3>
  <Stars filled={3} />
  <ul>
    {#each area.skills as { name }}
      <li>{name} <Stars filled={2} size={0.75} /></li>
    {/each}
  </ul>
</div>

<style>
  .card {
    width: 200px;
    padding: 15px;
    border-radius: 8px;
    color: white;
    text-align: left;
  }

  .card h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .card ul {
    padding-left: 20px;
    margin: 0;
  }

  .card ul li {
    margin-bottom: 5px;
    font-size: 0.9rem;
  }
</style>
