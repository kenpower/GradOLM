<script>
  let isCollapsed = true;
  let collapsible;

  const toggleDetails = () => {
    if (isCollapsed) {
      expandSection(collapsible);
    } else {
      collapseSection(collapsible);
    }
  };

  function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = "";

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        element.style.height = 0 + "px";
      });
    });

    // mark the section as "currently collapsed"
    isCollapsed = true;
  }

  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + "px";

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener("transitionend", function (e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener("transitionend", arguments.callee);

      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });

    // mark the section as "currently not collapsed"
    isCollapsed = false;
  }

  $: if (collapsible) collapseSection(collapsible);
</script>

<div class="container">
  <div class="slot1" on:click={toggleDetails}>
    <slot name="slot1">Default content for Slot 1</slot>
  </div>
  <div class="slot2" bind:this={collapsible}>
    <slot name="slot2">Default content for Slot 2</slot>
  </div>
</div>

<style>
  .slot1 {
    cursor: pointer;
  }
  .slot2 {
    overflow: hidden;
    transition: height 0.3s ease-out;
    height: auto;
  }

  /* .slot2.show { */
  /* opacity: 1; Fully visible */
  /* max-height: 1000px; */
  /* } */
</style>
