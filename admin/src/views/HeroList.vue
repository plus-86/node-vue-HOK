<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="name" label="英雄名称"> </el-table-column>
      <el-table-column prop="title" label="称号"> </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height: 3rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getHeroList, removeHeroById } from '@/request/api.js'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetch() {
      let res = await getHeroList()
      // 验证todo
      this.items = res.data
    },
    async remove(row) {
      this.$confirm(`是否删除 "${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await removeHeroById(row._id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style></style>
