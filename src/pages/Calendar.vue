<template>
  <div class="Calendar">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '~/HelloWorld.vue';

export default {
  name: 'calendar',
  components: {
    HelloWorld,
  },
};
</script>
