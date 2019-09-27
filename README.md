## `swiper3.3.1`

### 需求：

- 鼠标移入轮播图不播放

```js
$('.swiper-container').mouseenter(function () {
  mySwiper.stopAutoplay();
});
```

- 鼠标移除轮播图又开始播放

```js
$('.swiper-container').mouseleave(function () {
  mySwiper.startAutoplay();
});
```

----

- 注意：如果页面多个轮播图的时候

```js
$($('.swiper-container')[下标])
```



### 出现问题

- 当用户点击了分页器切换轮播图时候，轮播图不能自动播放

```js
// 解决方案
autoplayDisableOnInteraction : false, // 用户操作swiper之后，是否禁止autoplay
```

