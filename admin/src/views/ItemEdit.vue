<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
      </el-form-item>
      <el-form-item label="图标">
        <!-- action是发起post请求上传图片信息的地址 -->
        <!-- on-success是图片上传后的回调,第一个参是图片信息 -->
        <el-upload
          class="avatar-uploader"
          :action="$axios.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addItem, getItemById, updateItemById } from '@/request/api.js'
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
    afterUpload(res) {
      // 需要$set设置为响应式(目标对象，添加的属性名，添加的属性值)
      this.$set(this.model, 'icon', res.url)
    },
    async save() {
      let res
      if (this.id) {
        res = await updateItemById(this.model, this.id)
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
