<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div
        @click="$router.back()"
        class="iconfont icon-fenxiang text-blue"
      ></div>
      <strong class="flex-1 text-blue text-ellipsis">
        {{ model.title }}
      </strong>
      <div class="text-grey fs-xs">{{ model.createdAt | date }}</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-fenxiang"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
    </div>
    <div class="pt-2">
      <router-link
        class="py-1 text-ellipsis"
        :to="`/articles/${item._id}`"
        tag="div"
        v-for="item in model.related"
        :key="item._id"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getArticleById } from '@/request/api.js'
export default {
  filters: {
    date(val) {
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  watch: {
    id() {
      this.fetchArticle()
    }
  },
  methods: {
    async fetchArticle() {
      let res = await getArticleById(this.id)

      this.model = res.data
    }
  },
  created() {
    this.fetchArticle()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-fenxiang {
    font-size: 1.6923rem;
  }
  .body {
    img {
      width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
