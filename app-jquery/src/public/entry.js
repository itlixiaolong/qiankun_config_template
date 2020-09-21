const render = () => {
  document.querySelector('#test').innerHTML = window.$store.state.commonData.parent
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
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);