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
