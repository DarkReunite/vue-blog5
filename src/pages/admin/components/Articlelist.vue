<template lang="pug">
   v-container
    v-card
      v-card-title(primary-title) 
        span.headline 显示文章
      v-card-text   
        v-subheader 全部文章
        v-expansion-panel(v-if="article" )
          v-expansion-panel-content(v-for="(item,index) in article" :key="index")
            v-layout(row align-center justify-space-around slot="header")
              v-flex(xs1)
                span {{index}}
              v-flex(xs5)
                span {{item.title}}
              v-flex(xs3)
                span {{FormatTime(item.createdAt)}}
              v-flex(xs3)
                span {{item.category.cate_name || "无类别"}}
            v-card
              v-card-text 
                v-chip(v-for="tag in item.tags.tag_name" :key="tag._id") {{tag}}
              v-card-actions
                v-spacer
                v-btn(flat color="error" @click="deleteArticle(item._id)").ma-2 删除文件
                v-dialog(v-model="updateDialog" max-width="500px")
                  v-btn(color="primary" slot="activator").white--text update
                  v-card
                    v-card-title 
                      div.headline 更新文件
                    v-card-text
                      div.flex-between
                        div.flex-left
                          v-text-field(:label="fileName" prepend-icon="attach_file" disabled)
                        div.flex-right
                          input#update-file(type="file" @change="showFileName")
                          label(for="update-file").v-btn 选择文件
                    v-card-actions
                      v-spacer
                      v-btn(flat color="error" @click="updateDialog = false") 取消
                      v-btn(flat color="primary" @click="updateFile(item._id)") 确定
</template>

<script>
import {getArticleList} from '@/server/getData';
import {updateMdFile, removeMd} from '@/server/sendData';
import formatTime from '@/plugins/formatTime';
import bus from '../eventBus';

export default {
  data(){
    return {
      file: null,
      article: null,
      updateDialog: false,
      fileName: null,
      selected: [],
    }
  },

  mounted(){
    this.getArticleList();
    this.handleUpload();
  },

  methods: {
    /* eslint-disable */
    showFileName(e) {
      this.file = e.target.files[0];
      this.fileName = e.target.files[0].name;
    },

    async updateFile(id){
      
      try {
        let res = await updateMdFile(id, this.file);
        if (res.data.status !== 1) {
          alert(res.data.message)
        }else{
          this.updateDialog = false;
          console.log(res.data.message);
          
        }

      } catch (error) {
        console.log(error);
        
      }
    },

    async getArticleList() {
      this.$api.article.getList().then(res => {
        this.article = res.data.data;
      })
    },

    // async getList(){
    //   try {
    //     let resList = await getArticleList();
        
    //     if (resList.data) {
    //       this.article = resList.data;
    //     }
        
    //   } catch (error) {
    //     console.log(error);
        
    //   }
      
    // },

    deleteArticle(id) {
      let isSure = confirm('你确定要删除该文章吗？');
      if (!isSure) {
        return;
      }

      this.$api.article.delete(id).then(res => {
        alert(res.data.msg);
        this.getArticleList();
      })
    },

    // async removeArticle(id){
    //   let isSure = confirm("你确定要删除该文章吗？");
    //   if (!isSure) {
    //     return;
    //   }

    //   try {
    //     let res = await removeMd(id);
    //     if (res.data.status !== 1) {
    //       alert(res.data.message);
    //       return;
    //     }

    //     console.log(res.data.message);
    //     this.getList();


    //   } catch (error) {
    //     console.log(error);
        
    //   }
    // },

    FormatTime(ISO_time){
      return formatTime(ISO_time);
    },

    //接收更新文件成功时发送的事件
    handleUpload(){
      bus.$on('uploadEvent',(msg) => {
        if (msg.status === 1) {
          this.getList();
        }
      })
    },


  }
}
</script>

<style lang="scss" scoped>
#update-file{
  display: none;
}

.flex-between{
  display: flex;

  .flex-left{
    flex-grow: 1;
  }

  .flex-right{
    flex-grow: none;
  }
}
</style>
