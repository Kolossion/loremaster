<script>
  import TermBox from './components/TermBox.svelte'
</script>

<main>
  <article>
    <TermBox title="Hello!" color="#777">
      laksdjflakjsdflkjasldfkja
      sdflaksjdflkjasdlfkjasd
      falskdjfalskjdflakjsdfa
      sdflkajsdflkjasldkfjas
      dfalskdjfalskjdflakjsdflkjasdf
      asdlfkjasdlkfjaslkdfj
    </TermBox>
    <TermBox title="Hello!" color="#07f">
      laksdjflakjsdflkjasldfkja
      sdflaksjdflkjasdlfkjasd
      falskdjfalskjdflakjsdfa
      sdflkajsdflkjasldkfjas
      dfalskdjfalskjdflakjsdflkjasdf
      asdlfkjasdlkfjaslkdfj
    </TermBox>
  </article>
</main>

<style>
main {
  width: 100%;
  height: 100%;
}

article {
  display: flex;
  height: 100vh;
}
</style>