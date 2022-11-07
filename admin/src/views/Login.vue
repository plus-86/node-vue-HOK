<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"> </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Login } from '@/request/api.js'

export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login() {
      let res = await Login(this.model)
      // sessionStorage.token = res.data.token
      localStorage.token = res.data.token
      localStorage.username = res.data.username

      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功' // 可以让服务端传
      })
    }
  }
}
</script>

<style>
.login-card {
  width: 25rem;
  margin: 6rem auto;
}
</style>
