<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <div>这是子应用的home页</div>
    <span v-if="isQiankun" @click="changeParentState">主项目的数据：<span style="color:red; font-size:40px;">{{ commonData.parent }}</span>,点击将主应用和其他子应用同步变为2</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  computed: {
    commonData(){
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    }
  },
  mounted() {
    console.log('app-vue-hash Home.vue mounted')
  },
  methods: {
    changeParentState(){
      if(this.isQiankun){
        this.$root.parentVuex.dispatch('setData', { parent: 2 });
      }
    }
  },
}
</script>
