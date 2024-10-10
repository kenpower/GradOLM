<script>
  export let filled = 3;
  export let number = 5;
  export let size = 1.5;
  export let orientation = "horizontal"; // Options: "vertical" or "horizontal"
  export let background_color = "transparent";
  export let color = "#fff";
  export let unfilledcolor = "#fff6";
</script>

<span
  class="stars-container {orientation}"
  style="background-color: {background_color}; --filled-color:{color}; --unfilled-color: {unfilledcolor};"
>
  {#each Array(number) as _, i}
    <span
      style="--star-size:{size}em;"
      class="star {i < filled ? 'filled' : ''} "
      on:click={() => {
        console.log("clicked star:", i);
        if (filled === i + 1) filled = i;
        else filled = i + 1;
      }}
    >
      ★
    </span>
  {/each}
</span>

<style>
  .stars-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: var(--star-size); /* Set based on star size for horizontal */
    line-height: 1;
    cursor: pointer;
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
    color: var(--unfilled-color);
    -webkit-text-stroke: 0.05em var(--filled-color); /* Stroke width and color */
  }

  .star:hover {
    filter: brightness(1.1) contrast(1.1);
  }

  .filled {
    color: var(--filled-color);
  }
</style>
