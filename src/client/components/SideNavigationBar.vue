<template>
  <div class="sidenav">
    <div class="player" v-for="item in player.items">
      <p><img :src="item.track.album.images[2].url"/></p>
      <span>{{item.track.name}}</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Player from '../jsonmodel/player'

@Component({
  props: {
    player: Player,
  }
})
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
