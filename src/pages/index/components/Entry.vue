<template lang="pug">
  div.entryFooter
    div(v-if="summaryList")
      article(v-for="item in summaryList")
        header
          h2.entry-title
            router-link(:to="{path:`/article/${item._id}`}") {{item.title}}
        div.entry-content
          div.content(v-html="item.content")
          p
            router-link.link(:to="{path:`/article/${item._id}`}") Continue reading
        div.entry-footer
          entryFooter(
            :category="item.category.cate_name"
            :tags="item.tags"
            :createdAt="item.createdAt"
          )
    div(v-else)
      article
        header
          h2.entry-title
            a 请等待博主上传文章
        div.entry-content
          div.content
            p 文章正在加急上传中....
            p 请稍等:)
        div.entry-footer

</template>


<script>
import entryFooter from './EntryFooter';
import moment from 'moment';

export default {
  props: ['page'],
  components: {
    entryFooter,
  },

  data(){
    return {
      summaryList: null,
    }
  },

  mounted(){
    this.getArticleList();
  },

  methods: {
    // async getSummary(){
    //   //获取文章摘要
    //   try {
    //     let res = await this.$axios.get(`/page/${this.page}`);
    //       this.summaryList = res.data;
          
    //   } catch (error) {
        
    //   }
    // },
    getArticleList() {
      this.$api.article.getList().then(res => {
        this.summaryList = res.data.data;
      })
    },

    formatTime(ISO_time){
      return moment(ISO_time, moment.ISO_8601).format('LL');
    }


  },

  watch: {
    '$route' : 'getSummary'
  }

}
</script>




<style lang="scss" scoped>


article{
  margin-bottom: 7em;

  &::after{
    content: "";
    display: table;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
}


.entry-title {
  font-size: 1.75rem;
  margin: 0;
  margin-bottom: 1em;

  a {
    color: #f2f2f2;
    text-decoration: none;

    &:hover{
      color: #c7c7c7;
    }
  }
}

.entry-content {
  margin-left: 0;
  margin-right: 0;

  p {
    margin: 0;
  }

  a.link {
    color: #c7c7c7;
    text-decoration: none;
    box-shadow: 0 1px 0 0 currentColor;
    letter-spacing: -0.01em;

    &:hover{
      color: #f2f2f2;
      box-shadow: 0 0 0 0 currentColor;
      
    }
  }

}



@media screen and (min-width: 61.5em) {
  .entry-title {
    font-size: 2.5rem;
  }

  .entry-content {
    float: right;
    width: 70%;
  }
}


</style>
