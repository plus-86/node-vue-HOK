<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  addCategory,
  getCategoryById,
  updateCategoryById,
  getCategoryList
} from '@/request/api.js'
export default {
  // 获取上个页面放到url上传过来的参数
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parents: []
    }
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await updateCategoryById(this.model, this.id)
        // 验证todo
        this.$router.push('/categories/list')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      } else {
        res = await addCategory(this.model)
        // 验证todo
        this.$router.push('/categories/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    },
    async fetch() {
      let res = await getCategoryById(this.id)
      this.model = res.data
    },
    async fetchParents() {
      // 获取上级分类下拉菜单
      let res = await getCategoryList()
      this.parents = res.data
    }
  },
  created() {
    this.fetchParents()
    // 如果有id则去获取分类
    this.id && this.fetch()
  }
}
</script>

<style></style>
