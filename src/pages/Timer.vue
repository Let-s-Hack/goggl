<template>
  <div>
    <h1>This is an timer page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'timer',
  components: {
    HelloWorld,
  },
};
</script>
