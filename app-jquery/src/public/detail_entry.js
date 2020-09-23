const render = () => {
  top.$('#test').html(window.$store.state.commonData.parent)
  // document.querySelector('#test').innerHTML = window.$store.state.commonData.parent
};


(global => {
  global['purehtml'] = {

    bootstrap: ({ data, top }) => {
      console.log('purehtml bootstrap');
      console.log(data.store);
      window.$store = data.store
      window.$store.subscribe((mutation, state) => {
        if (window.$store) {
          render()
        } else {
          top.$bus.on(render)
        }
      })
      return Promise.resolve();
    },
    mount: ({ data,top }) => {
      console.log('purehtml mount');
      top.$bus.emit()
      render()
      // document.getElementById('btn').addEventListener('click',()=>{
      //   window.$store.dispatch('setData', { parent: 210 })
      // })
      top.$('#btn').click(()=>{
        window.$store.dispatch('setData', { parent: 210 })
      })
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);