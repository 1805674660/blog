/*
 * @Author: zeng 1805674660@qq.com
 * @Date: 2022-05-16 17:49:01
 * @LastEditors: zeng 1805674660@qq.com
 * @LastEditTime: 2022-05-19 18:02:40
 * @FilePath: \blog2\data-structure-and-algorithms\vue.use.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 设计原则
重要思想：开放封闭原则
对扩展开放
对修改封闭

// 工厂模式
用一个工厂函数，隐藏new
如jQuery $函数
如 React createElement函数
function factory(a,b,c){
  return new Foo()
}
const f = factory(1,2,3)

// 单例模式
全局唯一的实例
无法生成第二个
如VueX Redux的stors

class SingleTon{
  private static instance : SingleTon | null = null
  private constructor() 
  }
  public static getInstance(): SingleTon {
    if(this.instance == null){
      this.instance = new SingleTon()
    }
    return this.instance
  }
  fn1(){

  }
  fn2(){

  }
}
我们实例化SingleTon 会报错 const s = new SingleTon()
const s =  SingleTon.getInstance()
s.fn1()
s.fn2() 
const s1 =  SingleTon.getInstance()
s1 = s // true

js是单线程的，创建单例很简单
java是支持多线程的，创建单例要考虑锁死线程
否则多个线程同时创建，单例就重复了

// 代理模式
访问者不能直接访问对象，而是访问一个代理层
在代理层可以进行 get set做很多事情
如es6 的proxy实现VUE3.0的响应式
如微前端js样式隔离 沙盒用的proxy代理


//观察者模式
一个主题一个观察者，主题变化之后触发观察者
Btn.addEventListener('click',()=>{
  ...
})

// 发布订阅模式
event.emit('')

// 装饰器模式- 
原有功能不变，增加一些新功能
es和Typescript的Decorator语法