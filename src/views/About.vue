<template lang="pug">
  div.about
    h1 this is a about page
    button(@click="getArticleList") click
</template>

<script>
export default {
  
  methods: {
    async getArticleList () {
      
      this.$api.article.getList(2,1).then(res => {
        console.log(res);
      })
      
      
    }
  }
}
</script>
