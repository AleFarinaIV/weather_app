<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>

  <header>
    <app-header />
  </header>

  <main>
    <app-main />
  </main>

</template>

<style>
  @import "./styles/generals.scss"
</style>
