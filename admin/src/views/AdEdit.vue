<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
      </el-form-item>

      <el-form-item label="广告">
        <el-button @click="model.items.push({})" size="small">
          <i class="el-icon-plus"></i>
          添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="24" v-for="(item, i) of model.items" :key="i">
            <el-form-item label="跳转链接（URL）">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 0.5rem">
              <el-upload
                class="avatar-uploader"
                :action="$axios.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="(res) => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button
                size="small"
                type="danger"
                @click="model.items.splice(i, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addAd, getAdById, updateAdById } from '@/request/api.js'
export default {
  // 获取上个页面放到url上传过来的参数
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    }
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await updateAdById(this.model, this.id)
        // 验证todo
        this.$router.push('/ads/list')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      } else {
        res = await addAd(this.model)
        // 验证todo
        this.$router.push('/ads/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    },
    async fetch() {
      let res = await getAdById(this.id)
      this.model = Object.assign({}, this.model, res.data)
    }
  },
  created() {
    // 如果有id则去获取物品
    this.id && this.fetch()
  }
}
</script>
