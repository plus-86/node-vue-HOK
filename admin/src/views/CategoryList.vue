<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCategoryList } from '@/request/api.js'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetch() {
      let res = await getCategoryList()
      // 验证todo
      this.items = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style></style>
