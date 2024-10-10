<script>
  export let filled = 3;
  export let size = 1.5;
  export let orientation = "horizontal"; // Options: "vertical" or "horizontal"
  export let background_color = "transparent";
</script>

<div
  class="stars-container {orientation}"
  style="background-color: {background_color}"
>
  {#each Array(5) as _, i}
    <span style="--star-size:{size}em" class="star {i < filled ? 'filled' : ''}"
      >★</span
    >
  {/each}
</div>

<style>
  .stars-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: var(--star-size); /* Set based on star size for horizontal */
  }

  /* Vertical layout */
  .vertical {
    flex-direction: column-reverse; /* Place stars from bottom to top */
  }

  /* Horizontal layout */
  .horizontal {
    flex-direction: row; /* Place stars from left to right */
  }
  .star {
    font-size: var(--star-size);
    color: #fff6;
  }

  .filled {
    color: #fff;
  }
</style>
