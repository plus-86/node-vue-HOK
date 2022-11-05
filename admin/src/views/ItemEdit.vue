<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-input v-model="model.icon"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  addItem,
  getItemById,
  upateItemById,
  getItemList
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
        res = await upateItemById(this.model, this.id)
        // 验证todo
        this.$router.push('/items/list')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      } else {
        res = await addItem(this.model)
        // 验证todo
        this.$router.push('/items/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    },
    async fetch() {
      let res = await getItemById(this.id)
      this.model = res.data
    }
  },
  created() {
    // 如果有id则去获取物品
    this.id && this.fetch()
  }
}
</script>

<style></style>
