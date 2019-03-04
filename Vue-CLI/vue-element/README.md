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