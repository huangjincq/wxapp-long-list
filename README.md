# 小程序长列表渲染组件，解决内存不足问题

skeleton 组件为包裹每个item的容器组件

# How To Use

```html
<scroll-view
  bindscrolltolower="loadmore"
  class="list-scroll"
  lower-threshold="{{100}}"
  scroll-y="{{true}}"
>
  <block
    wx:for="{{list}}"
    wx:key="id"
  >
    <!-- skeleton组件 包裹item内容 -->
    <skeleton unique-id="{{item.id}}">
      <view class="item">
        <image
          class="item-image"
          lazy-load="{{true}}"
          src="https://img.ikstatic.cn/MTU3NzY5MDIzMjkwMiM0MjYjcG5n.png"
        />
        <view class="item-text">这是第 {{index}} 张图片</view>
      </view>
    </skeleton>
  </block>
</scroll-view>
```
