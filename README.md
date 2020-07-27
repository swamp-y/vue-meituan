# 仿美团外卖（web）

## 使用cli4脚手架工具、stylus预处理器、cube-ui组件库，vue-router作为主界面tab栏切换，axios作为http库

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