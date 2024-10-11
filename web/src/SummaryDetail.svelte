<script>
    let showDetails = false;

    const toggleDetails = () => (showDetails = !showDetails);
</script>

<div class="container">
    <div class="slot1" on:click={toggleDetails}>
        <slot name="slot1">Default content for Slot 1</slot>
    </div>
    <div class="slot2 {showDetails ? 'show' : ''}">
        <slot name="slot2">Default content for Slot 2</slot>
    </div>

</div>

<style>
    .slot2 {
        max-height: 0px;
        transition:
            max-height 0.9s ease,
            opacity 0.9s ease; /* Transition for both */
            overflow: hidden; 
    }

    .slot2.show {
        opacity: 1; /* Fully visible */
        max-height:1000px;
    }
</style>
