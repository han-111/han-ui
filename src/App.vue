<template>
  <h1>导航栏</h1>
   <router-link to="/" >第一个页面</router-link>
   <router-link to="/doc" >第二个页面</router-link>
  <router-view />

</template>

<script>
export default {
  name: "App",
};
</script>
