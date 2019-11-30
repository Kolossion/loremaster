<script>
  import TermBox from './TermBox.svelte'
  import TermButton from './TermButton.svelte'
  import InitiativeList from './InitiativeList.svelte'
  import { round, inCombat } from '../stores'
  // your script goes here
  let roundNum
  let isInCombat

  let unsubRound = round.subscribe((val) => {
    roundNum = val
  })

  let unsubInCombat = inCombat.subscribe((val) => {
    isInCombat = val
  })

  const setInCombat = () => (e) => {
    inCombat.update((val) => {
      return !isInCombat
    })
  }

  let getSubtitle = () => {
    if (inCombat == true) {
      return `Round ${roundNum}`
    } else {
      return 'Out of Combat'
    }
  }

</script>

<style>
  /* your styles go here */
</style>

<TermBox title="Initiative - {getSubtitle()}" color={isInCombat? "#f44" : "#777"}>
  <InitiativeList />
  <div slot="actions">
    <TermButton onClick={setInCombat()}>{isInCombat? "End" : "Start" } Combat</TermButton>
  </div>
</TermBox>
<!-- markup (zero or more items) goes here -->