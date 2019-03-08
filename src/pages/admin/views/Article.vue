<template lang="pug">
  div#article_menu
    uploadCard
    articleList
</template>

<script>
import uploadCard from '../components/Upload';
import articleList from '../components/Articlelist';

export default {
  components: {
    uploadCard,
    articleList
  }
}
</script>


