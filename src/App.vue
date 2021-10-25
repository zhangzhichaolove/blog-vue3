<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="jump">
    <router-link replace to="/header">显示头部</router-link>
    <router-link replace to="/content">显示内容</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.jump {
  display: flex;
  justify-content: space-evenly;
}
</style>
