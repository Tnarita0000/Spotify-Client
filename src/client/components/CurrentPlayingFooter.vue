<template>
  <div class="footer">
    <div class="sidenav-title">
      <img width="90" src="images/headphone.gif">
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
</style>
