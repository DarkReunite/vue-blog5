<template lang="pug">
  v-container
    v-card
      v-card-title(primary-title) 
        span.headline 上传文章
      v-card-text
        div.article-main
          div.article-menu
            v-dialog(v-model="uploadDialog" max-width="500px")
              v-btn(color="blue-grey" slot="activator").white--text upload
                v-icon(right dark) cloud_upload
              v-card
                v-card-title
                  div.headline 上传文件
                v-card-text
                  div.flex-between
                    div.flex-left
                      v-text-field(:label="fileName" prepend-icon="attach_file" disabled)
                    div.flex-right
                      input#uploadfile(type="file" @change="showFileName")
                      label(for="uploadfile").v-btn 选择文件
                  v-select(
                    v-model="category" 
                    label="类型" 
                    :items="category_items" 
                    prepend-icon="bookmark" 
                    item-text="cate_name" 
                    return-object)
                  v-text-field(
                    prepend-icon="label"
                    append-icon="keyboard_return"
                    label="标签" 
                    @keyup.enter="addTag" 
                    v-model="tag")
                  v-subheader tags
                  v-chip(v-for="item in tags" :key="item.name") {{item.tagName}}
                v-card-actions
                  v-spacer
                  v-btn(flat color="error" @click="cleanDialog") 取消
                  v-btn(flat color="primary" @click="uploadFile") 确定
    v-snackbar(
      v-model="snackbar",
      :color="color",
    ) {{bar_text}}
      v-btn(flat @click="snackbar = false") close

</template>

<script>
import {uploadMdFile, uploadMdInfo} from '@/server/sendData';
import bus from '../eventBus';
import { log } from 'util';

export default {
  data(){
    return {
      uploadDialog: false,
      fileName: '文件名',
      file: null,
      title: null,
      tag: null,
      category: {
        cate_name: '', 
        _id: ''
        },
      select_items: [
        {name: '长篇大论'}, 
        {name: '编程技术'},
        ],
      category_items: [],
      tags: [],

      snackbar: false,
      bar_text: '',
      color: '',

      

    }
  },

  mounted() {
    this.showCate();
  },

  methods: {
    /* eslint-disable */
    showFileName(e) {
      this.file = e.target.files[0];
      this.fileName = e.target.files[0].name;
    },

    addTag(){
      this.tags.push({tagName: this.tag});
      this.tag = null;
    },

    
    showCate() {
      this.$api.category.show().then(res => {
        this.category_items = res.data.data;
        
      })
    },

    cleanDialog(){
      this.uploadDialog = false;
      this.file = null;
      this.fileName = '文件名';
      this.tags = [];
      this.tag = null;
      this.category =  {name: ''};
    },

    async uploadFile(){
      if (!this.file) {
        alert('请选择文件！');
        return;
      }

      if (this.tags.length === 0) {
        alert('请输入文章的标签!');
        return;
      }

      let tag_items = [];
      this.tags.forEach(value => {
        tag_items.push(value.tagName)
      });
      

      this.$api.article.upload(
        this.file,
        tag_items,
        this.category._id)
        .then(res => {
          alert(res.data.msg)
        })
      
      // try {
      //   let resFile = await uploadMdFile(this.file);
        
      //   if (resFile.data.status !== 1) {
      //     //当文件上传出错时
      //     this.snackbar = true;
      //     this.color = 'error';
      //     this.bar_text = resFile.data.message;
      //     return;
      //   }

      //   //上传文件成功之后
      //   let resInfo = await uploadMdInfo(resFile.data.article_id, this.category, this.tags);

      //   if (resInfo.data.status !== 1) {
      //     this.snackbar = true;
      //     this.color = 'error';
      //     this.bar_text = '上传信息失败！';
      //     return;
      //   }

      //     this.snackbar = true;
      //     this.color = 'success';
      //     this.bar_text = '上传文件和信息成功！';
      //     this.uploadDialog = false;
      //     bus.$emit('uploadEvent', {status: 1})

      // } catch (error) {
      //   console.log(error);
        
      //   this.snackbar = true;
      //   this.color = 'error';
      //   this.bar_text = '无法连接服务器API';
      // }
    }
  }
}
</script>


<style lang="scss" scoped>
#uploadfile{
  display: none;
}

.article-main{
  display: flex;
  justify-content: space-between;
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
