"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[648],{3648:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"物品")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),e("el-form-item",{attrs:{label:"图标"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":t.afterUpload}},[t.model.icon?e("img",{staticClass:"avatar",attrs:{src:t.model.icon}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v(" 保存 ")])],1)],1)],1)},n=[],i=(r(7658),r(9328)),u={props:{id:{}},data(){return{model:{}}},methods:{afterUpload(t){this.$set(this.model,"icon",t.url)},async save(){let t;this.id?(t=await(0,i.ks)(this.model,this.id),this.$router.push("/items/list"),this.$message({type:"success",message:"更新成功"})):(t=await(0,i.jX)(this.model),this.$router.push("/items/list"),this.$message({type:"success",message:"保存成功"}))},async fetch(){let t=await(0,i.PF)(this.id);this.model=t.data}},created(){this.id&&this.fetch()}},a=u,o=r(1001),c=(0,o.Z)(a,s,n,!1,null,null,null),l=c.exports},9328:function(t,e,r){r.d(e,{$c:function(){return g},AT:function(){return a},Af:function(){return x},Ai:function(){return w},DA:function(){return k},HK:function(){return c},K8:function(){return D},Ns:function(){return b},PF:function(){return m},Qo:function(){return h},Vr:function(){return y},Vz:function(){return l},Xd:function(){return C},Xt:function(){return z},a4:function(){return U},ax:function(){return o},bX:function(){return v},cT:function(){return n},gM:function(){return Z},hc:function(){return F},i8:function(){return u},iH:function(){return $},jX:function(){return d},kB:function(){return j},ks:function(){return p},m3:function(){return i},mC:function(){return f},mr:function(){return X},oC:function(){return H},pF:function(){return A},qM:function(){return _},z8:function(){return K}});var s=r(9613);const n=t=>s.Z.post("/upload",t),i=t=>s.Z.post("/login",t),u=t=>s.Z.post("/rest/categories",t),a=()=>s.Z.get("/rest/categories"),o=t=>s.Z.get(`/rest/categories/${t}`),c=(t,e)=>s.Z.put(`/rest/categories/${e}`,t),l=t=>s.Z["delete"](`/rest/categories/${t}`),d=t=>s.Z.post("/rest/items",t),f=()=>s.Z.get("/rest/items"),m=t=>s.Z.get(`/rest/items/${t}`),p=(t,e)=>s.Z.put(`/rest/items/${e}`,t),h=t=>s.Z["delete"](`/rest/items/${t}`),Z=t=>s.Z.post("/rest/heroes",t),g=()=>s.Z.get("/rest/heroes"),$=t=>s.Z.get(`/rest/heroes/${t}`),v=(t,e)=>s.Z.put(`/rest/heroes/${e}`,t),b=t=>s.Z["delete"](`/rest/heroes/${t}`),_=t=>s.Z.post("/rest/articles",t),k=()=>s.Z.get("/rest/articles"),y=t=>s.Z.get(`/rest/articles/${t}`),C=(t,e)=>s.Z.put(`/rest/articles/${e}`,t),w=t=>s.Z["delete"](`/rest/articles/${t}`),A=t=>s.Z.post("/rest/ads",t),X=()=>s.Z.get("/rest/ads"),x=t=>s.Z.get(`/rest/ads/${t}`),F=(t,e)=>s.Z.put(`/rest/ads/${e}`,t),H=t=>s.Z["delete"](`/rest/ads/${t}`),U=t=>s.Z.post("/rest/admin_users",t),j=()=>s.Z.get("/rest/admin_users"),z=t=>s.Z.get(`/rest/admin_users/${t}`),D=(t,e)=>s.Z.put(`/rest/admin_users/${e}`,t),K=t=>s.Z["delete"](`/rest/admin_users/${t}`)}}]);
//# sourceMappingURL=648.a305af19.js.map