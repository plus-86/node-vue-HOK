<template>
  <m-card :icon="icon" :title="title">
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <!-- 获取swiper实例 -->
        <!-- 实例内方法slideTo -->
        <!-- 接受一个Numebr -->
        <!-- 滑到对应索引的幻灯片 -->
        <div
          v-for="(category, i) in categories"
          :key="i"
          class="nav-item"
          :class="{ active: active === i }"
          @click="$refs.list.swiperInstance.slideTo(i)"
        >
          <div class="nav-link">{{ category.name }}</div>
        </div>
      </div>
      <div class="pt-3">
        <!-- @slide-change是自带swiper的方法 -->
        <!-- 通过ref获取swiper实例 -->
        <!-- 给swiper注册引用信息，就是把swiper组件的信息以list为名注册到$refs上 -->
        <!-- 实例内有个索引值 -->
        <!-- 赋值给active实现滑动幻灯片同时改变类别高亮功能 -->
        <swiper
          :options="{ autoHeight: true }"
          ref="list"
          @slide-change="() => (active = $refs.list.swiperInstance.realIndex)"
        >
          <swiper-slide v-for="(category, i) in categories" :key="i">
            <!-- 具名插槽items，以名为category的attr绑定遍历出来的每一个category，给父组件用 -->
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
