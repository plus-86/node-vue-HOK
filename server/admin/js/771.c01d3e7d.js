"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[771],{4771:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});r(7658);var n=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("文章列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e("el-table-column",{attrs:{prop:"title",label:"标题"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push(`/articles/edit/${r.row._id}`)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(r.row)}}},[t._v("删除")])]}}])})],1)],1)},s=[],u=r(9328),i={data(){return{items:[]}},methods:{async fetch(){let t=await(0,u.DA)();this.items=t.data},async remove(t){this.$confirm(`是否删除 "${t.title}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(0,u.Ai)(t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()}))}},created(){this.fetch()}},o=i,c=r(1001),a=(0,c.Z)(o,n,s,!1,null,null,null),l=a.exports},9328:function(t,e,r){r.d(e,{$c:function(){return $},AT:function(){return o},Af:function(){return C},Ai:function(){return x},DA:function(){return v},HK:function(){return a},K8:function(){return H},Ns:function(){return b},PF:function(){return Z},Qo:function(){return p},Vr:function(){return w},Vz:function(){return l},Xd:function(){return y},Xt:function(){return F},a4:function(){return B},ax:function(){return c},bX:function(){return _},cT:function(){return s},gM:function(){return h},hc:function(){return T},i8:function(){return i},iH:function(){return g},jX:function(){return f},kB:function(){return D},ks:function(){return m},m3:function(){return u},mC:function(){return d},mr:function(){return z},oC:function(){return X},pF:function(){return A},qM:function(){return k},z8:function(){return K}});var n=r(9613);const s=t=>n.Z.post("/upload",t),u=t=>n.Z.post("/login",t),i=t=>n.Z.post("/rest/categories",t),o=()=>n.Z.get("/rest/categories"),c=t=>n.Z.get(`/rest/categories/${t}`),a=(t,e)=>n.Z.put(`/rest/categories/${e}`,t),l=t=>n.Z["delete"](`/rest/categories/${t}`),f=t=>n.Z.post("/rest/items",t),d=()=>n.Z.get("/rest/items"),Z=t=>n.Z.get(`/rest/items/${t}`),m=(t,e)=>n.Z.put(`/rest/items/${e}`,t),p=t=>n.Z["delete"](`/rest/items/${t}`),h=t=>n.Z.post("/rest/heroes",t),$=()=>n.Z.get("/rest/heroes"),g=t=>n.Z.get(`/rest/heroes/${t}`),_=(t,e)=>n.Z.put(`/rest/heroes/${e}`,t),b=t=>n.Z["delete"](`/rest/heroes/${t}`),k=t=>n.Z.post("/rest/articles",t),v=()=>n.Z.get("/rest/articles"),w=t=>n.Z.get(`/rest/articles/${t}`),y=(t,e)=>n.Z.put(`/rest/articles/${e}`,t),x=t=>n.Z["delete"](`/rest/articles/${t}`),A=t=>n.Z.post("/rest/ads",t),z=()=>n.Z.get("/rest/ads"),C=t=>n.Z.get(`/rest/ads/${t}`),T=(t,e)=>n.Z.put(`/rest/ads/${e}`,t),X=t=>n.Z["delete"](`/rest/ads/${t}`),B=t=>n.Z.post("/rest/admin_users",t),D=()=>n.Z.get("/rest/admin_users"),F=t=>n.Z.get(`/rest/admin_users/${t}`),H=(t,e)=>n.Z.put(`/rest/admin_users/${e}`,t),K=t=>n.Z["delete"](`/rest/admin_users/${t}`)}}]);
//# sourceMappingURL=771.c01d3e7d.js.map