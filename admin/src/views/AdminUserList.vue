<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/admin_users/edit/${scope.row._id}`)"
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
import { getAdminUserList, removeAdminUserById } from '@/request/api.js'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetch() {
      let res = await getAdminUserList()
      // 验证todo
      this.items = res.data
    },
    async remove(row) {
      this.$confirm(`是否删除 "${row.username}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await removeAdminUserById(row._id)
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
