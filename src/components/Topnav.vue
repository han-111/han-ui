<template>
  <div class="topnav">
        <div class="logo"></div>
        <ul class="menu">
          <li>菜单1</li>
          <li>菜单2</li>
        </ul>
          <img class="toggleAside" src="../assets/icon_list.png" @click="toggleMenu">
    </div>
</template>

<script lang="ts">
import { inject,Ref } from 'vue';
export default {
  name: 'Topnav',
  setup(){
    const menuVisible = inject<Ref<Boolean>>('menuVisible')//get
      console.log(menuVisible)
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      };
       return { toggleMenu };
    },
}
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      cursor: pointer;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}

</style>
