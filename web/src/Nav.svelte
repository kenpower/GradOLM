<script>
  export let navigate;

  function goBack() {
    window.history.back(); // Go back to the previous page
  }
</script>

<nav>
  <button on:click={goBack}>&leftarrow;Back</button>
  <!-- Back Button -->
  <button on:click={() => navigate("/")}>Go to Home Page</button>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
  }
</style>
