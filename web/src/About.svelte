<script>
  import { appData } from "./router.js";
  export let navigate;
</script>

<div>
  <h1>About Page: {$appData}</h1>
  <button on:click={() => navigate("/")}>Go to Home Page</button>
</div>
