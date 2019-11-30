<script>
  export let title;
  export let color;
</script>

<style>
.term-box {
  font-family: 'Source Code Pro', monospace;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
}

.outline {
  border-width: 2px;
  border-style: solid;
  outline-offset: -7px;
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 26px);
  z-index: -1;
}

.title {
  display: inline-block;
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
  background-color: var(--bg);
  color: white;
  z-index: 2;
  position:absolute;
  top: 0;
  left: 24px;
}

.actions {
  position: absolute;
  bottom: 0;
  right: 24px;
}
</style>

<div class="term-box">
  <div class="outline" style={"border-color: " + color + ";"}></div>
  <span class="title">{title}</span>
  <div class="content">
    <slot></slot>
  </div>
  <div class="actions">
    <slot name="actions"></slot>
  </div>
</div>