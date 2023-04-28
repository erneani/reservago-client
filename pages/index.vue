<template>
  <main>
    <Logo />
    <div class="panel scrollable">
      <Content />
    </div>
    <div class="panel blue-bg">
      <article class="right-panel-content">
        <div>
          <Input />
          <Reservation />
        </div>
        <div>
          <Alert title="35 unidades disponíveis" />
          <CheckoutButton />
        </div>
      </article>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  margin: 0 0;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.panel {
  height: 100vh;
  width: 50vw;
}

.blue-bg {
  background-color: #3b429f;
}

.left-panel-content {
  margin: 0px 48px;
  margin-top: 88px;
}

.right-panel-content {
  margin: 0px 48px;
  margin-top: 88px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 88px * 2);
}

.scrollable {
  overflow-y: scroll;
}
</style>
