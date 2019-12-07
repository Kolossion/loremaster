<script>
  export let onClick
  export let color = '#666'
  // your script goes here
</script>

<style>
button {
  display: inline-block;
  line-height: 19px;
  padding: 2px;
  padding-right: 5px;
  padding-left: 5px;
  color: white;
  border: none;
  font-size: 12px;
  font-weight: bold;
}
</style>

<button on:click={onClick} style={"background-color: " + color + ";"}>
  <slot></slot>
</button>
<!-- markup (zero or more items) goes here -->