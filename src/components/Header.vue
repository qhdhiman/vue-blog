<template>
  <mu-appbar title="知识库">
    <mu-avatar src="static/avatar.jpg" slot="left"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item v-for="btn in buttons" :title="btn"/>
    </mu-icon-menu>
  </mu-appbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      buttons: ['注册', '登录', '退出']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mu-appbar {
    position: fixed;
    top:0;
    left:0;
  }
</style>
