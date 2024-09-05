<script>
  export let filled = 3;
</script>

{#each Array(5) as _, i}
  <span class="star {i < filled ? 'filled' : ''}">★</span>
{/each}

<style>
  .star {
    font-size: 1.5rem;
    color: #fff6;
  }

  .filled {
    color: #fff;
  }
</style>
