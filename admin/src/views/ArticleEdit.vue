<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"> </el-input>
      </el-form-item>
      <el-form-item label="详情">
        <VueEditor
          useCustomImageHandler
          @image-added="handleImageAdded"
          v-model="model.body"
        ></VueEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

import {
  addArticle,
  getArticleById,
  updateArticleById,
  getCategoryList,
  uploadFile
} from '@/request/api.js'
export default {
  // 获取上个页面放到url上传过来的参数
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: []
    }
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await updateArticleById(this.model, this.id)
        // 验证todo
        this.$router.push('/articles/list')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      } else {
        res = await addArticle(this.model)
        // 验证todo
        this.$router.push('/articles/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    },
    async fetch() {
      let res = await getArticleById(this.id)
      this.model = res.data
    },
    async fetchCategories() {
      // 获取上级分类下拉菜单
      let res = await getCategoryList()
      this.categories = res.data
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // 转化图片
      const formData = new FormData()
      formData.append('file', file)
      // 上传图片到接口
      const res = await uploadFile(formData)
      // 插入上传到接口的图片路径
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    }
  },
  created() {
    this.fetchCategories()
    // 如果有id则去获取分类
    this.id && this.fetch()
  }
}
</script>

<style></style>
