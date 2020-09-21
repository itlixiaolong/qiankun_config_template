<template>
  <div id="app">
    <div class="parent_content">
    <header>
      <router-link to="/app-vue-hash/" class="link">点击跳转子应用app-vue-hash</router-link>
      <router-link to="/app-vue-history/"  class="link">点击跳转子应用app-vue-history</router-link>
      <router-link to="/app-jquery/"  class="link">点击跳转子应用app-jquery</router-link>
      <router-link to="/about"  class="link">点击跳转父应用的about页</router-link>
    </header>
    <div @click="changeParentState" style="margin-top:50px;">父页面中父项目vuex中的数据：<span style="color:red;font-size:40px;">{{ commonData.parent }}</span>，点击同步所有的子应用变回1</div>
    <router-view class="parent_content_view"></router-view>
    </div>
    <div id="appContainer"></div>
  </div>
</template>

<script>
export default {
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
  },
  methods: {
    changeParentState(){
      this.$store.commit('setCommonData',{ parent: 1 });
    }
  },
}
</script>

<style scoped>
#app{
  height: 100vh;
  display: flex;
}
.parent_content{
  border:4px solid blue;
}
.parent_content_view{
  border:2px solid red;
}
#appContainer{
  border:4px solid lightgreen;
}
header>a{
  margin: 0 20px;
}
.link{
  display: block;
  margin: 5px 0;
  text-align: left;
}
.appContainer{
  background: #ccc;
  padding: 20px;
}
</style>
