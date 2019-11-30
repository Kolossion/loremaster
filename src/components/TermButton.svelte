<script>
  export let onClick
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
  background-color: blueviolet;
  border: none;
  font-size: 12px;
}
</style>

<button on:click={onClick}>
  <slot></slot>
</button>
<!-- markup (zero or more items) goes here -->