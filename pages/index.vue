<template>
  <div>
    <h1>Hello world!</h1>
    <h3>{{$store.state.counter}}</h3>
    <button @click='increment'></button><br>
    <a href="/login">Login</a>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  created: function() {
  },
  methods: {
    increment: function() {
      this.$store.commit('increment');
    },
    signIn: function() {
      this.$store.commit('signIn');
    }
  }
}
</script>
