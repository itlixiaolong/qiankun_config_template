const render = () => {
  top.$('#test').html(window.$store.state.commonData.parent)
};


(global => {
  global['purehtml'] = {

    bootstrap: ({ data, top }) => {
      console.log('purehtml bootstrap');
      console.log(data.store);
      window.$store = data.store
      //这里可以订阅父应用的store的所有mutation，进行个性化操作
      window.$store.subscribe((mutation, state) => {
        if (window.$store) {
          render()
        } else {
          top.$bus.on(render)
        }
      })
      return Promise.resolve();
    },
    //mount钩子相当于jquery的ready函数，可以放一些初始的操作
    mount: ({ data,top }) => { //top是父应用的window对象
      top.$bus.emit((callbackList)=>{   //这里可以定制callback的回调处理机制
        callbackList.forEach(fn => {
            if(fn!==render){
              fn()
            }
        });
      })
      render()
      top.$('#btn').click(()=>{   //初始化的绑定事件
        window.$store.dispatch('setData', { parent: 210 })
      })
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);