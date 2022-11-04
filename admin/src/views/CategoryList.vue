<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            type="text"
            size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
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
