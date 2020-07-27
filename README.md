# 仿美团外卖（web）一比一纯个人手写

### 使用cli4脚手架工具、stylus预处理器、cube-ui组件库，vue-router作为主界面tab栏切换，axios作为http库

## 一、主体框架搭建
### 1、主页使用flex布局，内部container为 
``` 
flex：1，overflow: hidden 
``` 
### 底部栏使用cube-tabbar样式改造，采用固定高度，通过cube-tabbar组件点击事件，判断触发不同value值，
```
this.$router.push() 
``` 
### 切换主页面不同组件

## 二、主页推荐数据mook

### 1、扒拉美团官网数据成到json
### 2、导入axios并挂载到vue原型上

```
import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.6:8080/'
Vue.prototype.$axios = axios
```
### 3、一比一仿制，商家列表区块样式，并完成mook数据渲染