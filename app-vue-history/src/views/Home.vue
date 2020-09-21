<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <div>这是histoy子应用的home页</div>
      <div v-if="isQiankun" @click="changeParentState">主项目的数据：<span style="color:red; font-size:40px;">{{ commonData.parent }}</span>,点击将主应用和其他子应用同步变为5</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  mounted () {
    console.log('>>>>>>>>>');
    console.log(this.$root.parentVuex.state.commonData);
  },
  computed: {
    commonData(){
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    }
  },
   methods: {
    changeParentState(){
      if(this.isQiankun){
        this.$root.parentVuex.dispatch('setData', { parent: 5 });
      }
    }
  }
}
</script>
