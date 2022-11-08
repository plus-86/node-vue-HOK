<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img
          class="w-100"
          src="@/assets/images/468f663b9e4290b435061eb877595a66.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="@/assets/images/bb29e3a3369244749a29eb3d85585db2.jpeg"
          alt=""
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        }
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/variables';
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.active {
      background: map-get($colors, 'info');
    }
  }
}
</style>
