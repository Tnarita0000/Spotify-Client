<template>
  <div class="footer">
    <div class='current-playing' v-if='track'>
      <span>
        <img :src="track.item.album.images[0].url"/>
      </span>
      <div class='track-info'>
        <span class='tack-name'>{{track.item.name}}</span><br/>
        <span class='track-artist'>{{track.item.artists[0].name}}</span>
      </div>
    </div>
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
export default class CurrentPlayingFooterComponent extends Vue {
}
</script>
<style scoped>
.footer {
  border-top: solid 1px #444;
  hegith: 200px;
  width: 100%;
  position: fixed;
  float: right;
  z-index: 1;
  bottom: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
}
.sidenav::-webkit-scrollbar {
  display: none;
}
.footer img {
  float: left;
}
.current-playing img {
  height: 90px;
}

</style>
