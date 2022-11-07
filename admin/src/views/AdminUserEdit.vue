<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"> </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  addAdminUser,
  getAdminUserById,
  updateAdminUserById,
  getAdminUserList
} from '@/request/api.js'
export default {
  // 获取上个页面放到url上传过来的参数
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await updateAdminUserById(this.model, this.id)
        // 验证todo
        this.$router.push('/admin_users/list')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      } else {
        res = await addAdminUser(this.model)
        // 验证todo
        this.$router.push('/admin_users/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    },
    async fetch() {
      let res = await getAdminUserById(this.id)
      this.model = res.data
    }
  },
  created() {
    // 如果有id则去获取分类
    this.id && this.fetch()
  }
}
</script>

<style></style>
