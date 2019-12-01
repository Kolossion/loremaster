<script>
  import TermBox from './TermBox.svelte'
  import TermButton from './TermButton.svelte'
  import InitiativeList from './InitiativeList.svelte'
  import { round, inCombat, actors } from '../stores'
  // your script goes here
  let roundNum
  let isInCombat
  let combatants

  let unsubRound = round.subscribe((val) => {
    roundNum = val
  })

  let unsubInCombat = inCombat.subscribe((val) => {
    isInCombat = val
  })

  let unsubActors = actors.subscribe((val) => {
    combatants = val
  })

  const setInCombat = (e) => {
    if (isInCombat) {
      round.update((val) => 1)
    }
    inCombat.update((val) => {
      return !isInCombat
    })
  }

  const addActor = (e) => { 
    actors.update((val) => {
      val.push({
        type: 'player', 
        name: 'Manspazotron',
        maxHP: 367,
        curHP: 367,
        AC: 22,
        number: 2,
        initiative: 14
      })
      return val
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
    <TermButton onClick={setInCombat}>{isInCombat? "End" : "Start" } Combat</TermButton>
    <TermButton onClick={addActor}>Add Monster to List</TermButton>
  </div>
</TermBox>
<!-- markup (zero or more items) goes here -->