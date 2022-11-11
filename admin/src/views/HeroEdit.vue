<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basicInfo" type="border-card">
        <el-tab-pane name="basicInfo" label="基础信息">
          <el-form-item label="名称">
            <el-input v-model="model.name"> </el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"> </el-input>
          </el-form-item>
          <el-form-item label="头像">
            <!-- action是发起post请求上传图片信息的地址 -->
            <!-- on-success是图片上传后的回调,第一个参是图片信息 -->
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="(res) => $set(this.model, 'avatar', res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="海报">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="(res) => $set(this.model, 'banner', res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <!-- 编辑时用categories内的_id去跟下拉列表做了匹配 -->
            <el-select multiple v-model="model.categories">
              <!-- 获取了分类下拉列表 -->
              <el-option
                v-for="item of categories"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.difficult"
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.skills"
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.attack"
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.survive"
            >
            </el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select filterable multiple v-model="model.items1">
              <el-option
                v-for="item of items"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select filterable multiple v-model="model.items2">
              <el-option
                v-for="item of items"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})" size="small">
            <i class="el-icon-plus"></i>
            添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) of model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <!-- 给model.skills[].icon响应式赋值 -->
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="(res) => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="冷却">
                <el-input v-model="item.cooldown"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.consume"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.skills.splice(i, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button @click="model.partners.push({})" size="small">
            <i class="el-icon-plus"></i>
            添加英雄
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(partner, i) of model.partners" :key="i">
              <el-form-item label="英雄">
                <el-select filterable v-model="partner.hero">
                  <el-option
                    v-for="hero in heroes"
                    :label="hero.name"
                    :value="hero._id"
                    :key="hero._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="partner.description">
                </el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.partners.splice(i, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button style="margin-top: 1rem" type="primary" native-type="submit">
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  addHero,
  getHeroById,
  updateHeroById,
  getCategoryList,
  getItemList,
  getHeroList
} from '@/request/api.js'
export default {
  // 获取上个页面放到url上传过来的参数
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        skills: [],
        partners: []
      },
      categories: [],
      items: [],
      heroes: []
    }
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await updateHeroById(this.model, this.id)
        // 验证todo
        this.$router.push('/heroes/list')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      } else {
        res = await addHero(this.model)
        // 验证todo
        this.$router.push('/heroes/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    },
    async fetch() {
      let res = await getHeroById(this.id)
      // this.model = res.data
      // 防止属性层级过深找不到而报错
      // Object.assign(目标对象,源对象1,源对象2)
      // 逐次合并属性
      // 而不是像this.model = res.data直接替换
      // 这样会找不到层级深的属性
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchCategories() {
      let res = await getCategoryList()
      this.categories = res.data
    },
    async fetchItems() {
      let res = await getItemList()
      this.items = res.data
    },
    async fetchHeroes() {
      let res = await getHeroList()
      this.heroes = res.data
    }
  },
  created() {
    this.fetchItems()
    this.fetchCategories()
    this.fetchHeroes()
    // 如果有id则去获取物品
    this.id && this.fetch()
  }
}
</script>

<style></style>
