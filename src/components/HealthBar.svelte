<script>
  export let max
  export let number

  import { writable } from 'svelte/store'
  // your script goes here

  const health = writable(max)
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
    background-color: #666;
    width: 100%;
    position: relative;
  }

  .cur-health {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #c00;
  }
</style>

<div class="health-bar">
  <p class="text">
    {`${number} :`}
  </p>
  <div class="health-amount">
    <p>{curHealth}/{max}</p>
    <div class="cur-health" style={"width: " + ((curHealth / max) * 100) + "%;"}></div>
  </div>
</div>