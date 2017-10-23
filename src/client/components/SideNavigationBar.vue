<template>
  <div class="sidenav">
    <h1>hoge</h1>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class SideNavigationBarComponent extends Vue {
}
</script>
<style scoped>
.sidenav {
  height: 100%;
  min-width: 200px;
  width: 10%;
  position: fixed;
  float: right;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}
</style>
