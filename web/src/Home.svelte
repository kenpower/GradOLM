<script>
  export let gotoUpdate;
</script>

<h1>Home</h1>

{#each Array(5) as _, i}
  <h2 on:click={() => gotoUpdate(i)}>Update {i}</h2>
{/each}
