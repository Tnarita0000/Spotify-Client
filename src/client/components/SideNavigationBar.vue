<template>
  <div class="sidenav">
    <div class="sidenav-title">
      <h2>History</h2>
    </div>
    <template v-if="track">
      <div class="player" v-for="item in track.items">
        <p><img :src="item.track.album.images[2].url"/></p>
        <p class="">{{item.track.artists[0].name}}</p>
        <p class="track__name">{{item.track.name}}</p>
      </div>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    track: Object,
  }
})
export default class SideNavigationBarComponent extends Vue {
}
</script>
<style scoped>
.sidenav {
  border-left: solid 1px #444;
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
  transition: 0.5s;
  padding-left: 15px;
}
.sidenav::-webkit-scrollbar {
  display: none;
}
.track__name {
  padding-top: 1px;
  padding-bottom: 12px;
  font-size: 14px;
}
</style>
