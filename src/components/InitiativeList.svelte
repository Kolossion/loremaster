<script>
  import { actors } from '../stores'
  // your script goes here
</script>

<style>
  /* your styles go here */
</style>

<ul class="initiative-list">
  {#each items as item}
    <!-- content here -->
  {:else}
    <!-- empty list -->
  {/each}
</ul>
<!-- markup (zero or more items) goes here -->