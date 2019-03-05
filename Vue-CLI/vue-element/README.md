# 2019.3.3 晚 多云
## vue-router的使用
### 下载vue-router npm 包
```
npm install vue-router
```
### 在main.js中引用vue-router
```
import VueRouter from 'vue-router'
```
### 调用Vue.use(VueRouter)
```
Vue.use(VueRouter)
```
### 配置路由
```
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: "/goods",
      component: Goods,
      
    },
    {
      path: "/ratings",
      component: Ratings
    },
    {
      path: "/seller",
      component: Seller
    },
  ]
})
```
### 在template模板中使用 router-link 标签
```
<div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
</div>
```

## 关于做一个 1px 的线
### 先使用绝对定位定位它的位置，和伪类
```
position relative
  &:after
    display block
    position absolute
    left 0
    bottom 0
    width 100%
    border-top 1px solid $color
    content ''
```
### 再用transform: scaleY 变形，以适配移动端
```
@media (-webkit-min-device-pixel-ratio: 1.5 ),(min-device-pixel-ratio: 1.5)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.7)
      transform: scaleY(0.7)

@media (-webkit-min-device-pixel-ratio: 2 ),(min-device-pixel-ratio: 2)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.5)
      transform: scaleY(0.5)
```

## 关于Easy Mock网站的使用 + axios
```
axios
    .get('https://www.easy-mock.com/mock/5c7bd05d5aff8d30f9ea7cd8/api/api')
      .then(data => {
            data = data.data.data
            window.console.log(data.seller)
          })
```
# 2019.3.4 上午 晴
## 完成Header部分
## 滤镜效果
```
filter blur(10px)
```

## Sticky footers设计
### sticky footers布局的结构
#### html结构
```
<div class="detail" v-show="detailShow">
  <div class="detail-wrapper clearfix">
    <div class="detail-main"></div>
  </div>
  <div class="detail-close">
    <i class="icon-close"></i>
  </div>
</div>
```
#### 清除浮动 clearfix
```
.clearfix
  display: inline-block
  &:after
    display: block
    content: ''
    height 0
    line-height 0
    clear both
    visibility hidden
```
#### CSS, main 中设置
```
.detail-main
  margin-top 64px
  padding-bottom 64px
```

## Vue动画效果 + stylus 踩坑
### 用 transition 包裹需要变化部分的html结构
#### html
```
<transition name="fade">
  <div class="demo" v-show="detailShow"></div>
</transition>
```
---
#### stylus
```
.demo
.fade-enter-active, .fade-leave-active
  transition opactiy 0.7s
.fade-enter, .fade-leave-to
  opactiy 0
```
## backdrop-filter blur(10px) ios系统的模糊

## 采坑 在Vue上获取DOM
### 使用ref
```
<!-- `vm.$refs.p` will be the DOM node -->
<p ref="p">hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>
```