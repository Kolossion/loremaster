<script>
  import TermBox from './components/TermBox.svelte'
  import InitiativePanel from './components/InitiativePanel.svelte'
  import TermButton from './components/TermButton.svelte'
</script>

<style>
main {
  width: 100%;
  height: 100%;
}

article {
  display: flex;
  height: 100vh;
}

.vert {
  display: flex;
  flex-direction: column;
  width: 700px;
}
</style>

<main>
  <article>
    <InitiativePanel />
    <div class="vert">
      <TermBox title="Hello!" color="#07f">
        <p>
          <i class="fas fa-flask" />
          laksdjflakjsdflkjasldfkja
          sdflaksjdflkjasdlfkjasd
          falskdjfalskjdflakjsdfa
          sdflkajsdflkjasldkfjas
          dfalskdjfalskjdflakjsdflkjasdf
          asdlfkjasdlkfjaslkdfj
        </p>
      </TermBox>
      <TermBox title="Hello!" color="#07f">
        laksdjflakjsdflkjasldfkja
        sdflaksjdflkjasdlfkjasd
        falskdjfalskjdflakjsdfa
        sdflkajsdflkjasldkfjas
        dfalskdjfalskjdflakjsdflkjasdf
        asdlfkjasdlkfjaslkdfj
      </TermBox>
    </div>
  </article>
</main>