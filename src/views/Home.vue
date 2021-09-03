<template>
<div>
    <div class="topnav">
        <div class="logo"></div>
        <div class="menu"></div>
    </div>
    <div class="banner">
        <h1>Han-UI</h1>
        <h2>一个支持vue，react的UI框架</h2>
        <p class="action">
            <a href="">GitHub</a>
            <a href="">开始</a>
        </p>
    </div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="sacc" scope>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}

</style>
