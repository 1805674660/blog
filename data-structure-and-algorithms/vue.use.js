/*
 * @Author: zeng 1805674660@qq.com
 * @Date: 2022-05-16 17:49:01
 * @LastEditors: zeng 1805674660@qq.com
 * @LastEditTime: 2022-05-16 18:00:04
 * @FilePath: \blog2\data-structure-and-algorithms\vue.use.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
    Vue.use = function (plugin: Function | Object) {
      // 获取已经安装的插件
      const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
      // 看看插件是否已经安装，如果安装了直接返回
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }
  
      // toArray(arguments, 1)实现的功能就是，获取Vue.use(plugin,xx,xx)中的其他参数。
      // 比如 Vue.use(plugin,{size:'mini', theme:'black'})，就会回去到plugin意外的参数
      const args = toArray(arguments, 1)
      // 在参数中第一位插入Vue，从而保证第一个参数是Vue实例
      args.unshift(this)
      // 插件要么是一个函数，要么是一个对象(对象包含install方法)
      if (typeof plugin.install === 'function') {
        // 调用插件的install方法，并传入Vue实例
        plugin.install.apply(plugin, args)
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args)
      }
      // 在已经安装的插件数组中，放进去
      installedPlugins.push(plugin)
      return this
    }
  }
// 为什么axios不需要安装，可以开箱即用？
// 其实理由也很简单，跟上面需要install的相反的。因为axios是基于Promise封装的库，是完全独立于Vue的，根本不需要挂载在Vue上也能实现发送请求。
// 而因为VueRouter需要为我们提供$router、$routers之类的属性，要依赖与Vue或者操作Vue实例才能实现。
Element中的install
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
	// components是ElementUI的组件数组，里面有Dialog、Input之类的组件
 // 往Vue上面挂载组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);
// 自定义一些参数
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
// 在Vue原型上注册一些方法，这就是为什么我们可以直接使用this.$alert、this.$loading的原因，值就是这么来的。
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};
