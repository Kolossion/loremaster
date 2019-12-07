<script>
  export let max
  export let number

  import { writable } from 'svelte/store'
  import TermButton from './TermButton.svelte'
  // your script goes here

  const health = writable(max - 5)
  let curHealth

  const unsubHealth = health.subscribe((val) => {
    curHealth = val
  })

  const damage = (hp) => (e) => {
    health.update((val) => val - hp)
  }

  const heal = (hp) => (e) => {
    health.update((val) => val + hp)
  }
</script>

<style>
  /* your styles go here */
  .health-bar {
    display: flex;
    width: 100%;
  }

  .health-amount {
    flex-grow: 1;
    position: relative;
  }

  .cur-health {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #c00;
    z-index: -1;
  }

  .health-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #555;
    z-index: -2;
  }

  .text {
    margin-right: 15px;
  }

  .health-amount p {
    padding-left: 3px;
  }
</style>

<div class="health-bar">
  <p class="text">
    {`${number}`}
  </p>
  <div class="health-amount">
    <p>{curHealth}/{max}</p>
    <div class="cur-health" style={"width: " + ((curHealth / max) * 100) + "%;"}></div>
    <div class="health-bg"></div>
  </div>
  <div class="health-actions">
    <TermButton color="#0f0">+</TermButton>
    <TermButton color="#f00">-</TermButton>
  </div>
</div>