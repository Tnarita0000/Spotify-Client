<template>
  <ul>
    <li>{}</li>
    <li>{}</li>
    <li>{}</li>
    <li>{}</li>
  </ul>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import User from '../models/user.js'

@Component({})
export default class UserComponent extends Vue {
  created() {
    this.user = new User();
    debuger;
  }
}
</script>

