<template lang="pug">
  div.article(v-if="article")
    article
      header
        h2.article-title {{article.title}}
      div.article-content
        div(v-html="article.content")
      div.author-info

      div.article-footer
        entryFooter(
          :category="article.category.cate_name"
          :tags="article.tags"
          :createdAt="article.createdAt"
        )
  
</template>

<script>
import  entryFooter from '../components/EntryFooter';
import highlightCode from '@/plugins/highlight';

export default {
  props: ['id'],
  components: {
    entryFooter,
  },

  data(){
    return {
      article: null,
    }
  },

  mounted() {
    this.getArticle();
  },

  updated() {
    highlightCode();
  },

  methods: {
    getArticle() {
      this.$api.article.getArticle(this.id).then(res => {
        this.article = res.data.data;
      })
    }

  },
  
}
</script>



<style lang="scss" scoped>

article{
  margin-bottom: 7em;

  .article-title {
    font-size: 1.75rem;
    margin: 0;
    margin-bottom: 1em;
  }

  &::after{
    content: "";
    display: table;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }


}

@media screen and (min-width: 61.5em) {
  .article-title {
    font-size: 2.5rem !important;
  }

  .article-content {
    float: right;
    width: 70%;
  }
}
</style>

