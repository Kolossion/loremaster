<script>
  import TermBox from './TermBox.svelte'
  import { round } from '../model/stores'
  // your script goes here
  let roundNum = 0

  let unsubRound = round.subscribe((val) => {
    roundNum = val
  })



</script>

<style>
  /* your styles go here */
</style>

<TermBox title="Initiative - Round {roundNum}" color="#777">
  laksdjflakjsdflkjasldfkja
  sdflaksjdflkjasdlfkjasd
  falskdjfalskjdflakjsdfa
  sdflkajsdflkjasldkfjas
  dfalskdjfalskjdflakjsdflkjasdf
  asdlfkjasdlkfjaslkdfj
</TermBox>
<!-- markup (zero or more items) goes here -->