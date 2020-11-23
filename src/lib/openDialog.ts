import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';


export const openDialog = (options) => {
  const {title, content, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);

  const close = () => {
    //销毁app和div,这里可能需要调试才能写div.remove();
    app.unmount(div);
    div.remove();
  };
  // 想办法在展示Dialog的时候传一个visible为true的参数
  //使用一个h函数
  //下面这个函数里面的内部执行的顺序:
  //1.先执行app.mount()
  //2.再执行render里面的相关操作
  //onUpdate:visible是监听visible事件的
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true, 'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            close();
          }
        }, ok, cancel
      }, {
        title,
        content
      });
    }
  });
  app.mount(div);
};