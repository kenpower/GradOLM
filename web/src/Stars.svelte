<script>
  export let filled = 3;
  export let size = 1.5;
</script>

{#each Array(5) as _, i}
  <span style="--star-size:{size}em" class="star {i < filled ? 'filled' : ''}"
    >★</span
  >
{/each}

<style>
  .star {
    font-size: var(--star-size);
    color: #fff6;
  }

  .filled {
    color: #fff;
  }
</style>
