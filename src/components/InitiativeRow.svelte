<script>
  export let data
  export let turnIndex

  import HealthBar from './HealthBar.svelte'
  import { turn, inCombat } from '../stores.js'

  let currentTurn
  let isInCombat

  const unsubTurn = turn.subscribe((val) => {
    currentTurn = val
  })

  const unsubInCombat = inCombat.subscribe((val) => {
    isInCombat = val
  })

  const getTopIcon = () => {
    switch (data.type) {
      case 'monster':
        return 'fas fa-skull'
      case 'player':
        return 'fas fa-user'
      case 'boss':
        return 'fas fa-dragon'
      default:
        return 'fas fa-user'
    }
  }
</script>

<style>
.initiative-row {
  width: 100%;
  display: flex;

}

.creature-data {
  flex-grow: 1;
}

.name {
  color: white;
  font-weight: bold;
}

.name .subtype {
  color: #999;
}

.name i.fa-skull {
  color: #999;
}

.name i.fa-user {
  color: #0cc;
}

.name i.fa-dragon {
  color: #f00;
}

.indicator {
  display: inline-block;
  color: #333;
  width: 20px;
}

.indicator.active {
  color: #fff;
}

.initiative-value {
  color: #999;
}
</style>

<div class="initiative-row">
  <div class="indicator {isInCombat && (turnIndex == currentTurn) ? 'active' : ''}">
    <i class="fas fa-play" />
  </div>
  <div class="creature-data">
    <p class="name">
      <i class={ getTopIcon() } />
      {data.name} - <span class="initiative-value">{data.initiative}</span>
    </p>
    <div class="health-data">
      {#each [...Array(data.number).keys()] as num, index}
        <HealthBar max={data.maxHP} number={num + 1}/>
      {/each}
    </div>
  </div>
</div>
<!-- markup (zero or more items) goes here -->