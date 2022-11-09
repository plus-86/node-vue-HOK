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
      <swiper-slide>
        <img
          class="w-100"
          src="@/assets/images/468f663b9e4290b435061eb877595a66.jpeg"
          alt=""
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <!-- 获取子组件内，名为items的具名插槽所绑定的attr category -->
      <template #items="{ category }">
        <!-- 遍历 category.newsList 渲染每一页幻灯片的新闻-->
        <div class="py-2" v-for="(item, i) in category.newsList" :key="i">
          <span>[{{ item.categoryName }}]</span>
          <span>|</span>
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsCats: [
        {
          name: '热门',
          newsList: [
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            }
          ]
        },
        {
          name: '新闻',
          newsList: [
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            }
          ]
        },
        {
          name: '新闻',
          newsList: [
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            }
          ]
        },
        {
          name: '新闻',
          newsList: [
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            }
          ]
        },
        {
          name: '新闻',
          newsList: [
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            },
            {
              categoryName: '公告',
              title: '11月2日全服不停机更新公告',
              date: '06/02'
            }
          ]
        }
      ],
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        },
        // Some Swiper option/callback...
        autoplay: {
          delay: 3000
        },
        loop: true
      }
    }
  },
  mounted() {
    console.log()
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

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
