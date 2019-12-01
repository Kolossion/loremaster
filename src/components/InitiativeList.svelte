<script>
  import { actors } from '../stores'
  import InitiativeRow from './InitiativeRow.svelte'

  let things

  const unsubActors = actors.subscribe((val) => {
    things = val
  })
  // your script goes here
</script>

<style>
  /* your styles go here */
</style>

<ul class="initiative-list">
  {#each things as thing, index}
    <InitiativeRow data={thing} turnIndex={index} />
  {:else}
    <p>Nothing here, yet!</p>
  {/each}
</ul>
<!-- markup (zero or more items) goes here -->