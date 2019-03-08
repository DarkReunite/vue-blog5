<template lang="pug">
  div#Summary-content
    entry(:page="page")
    pagination(
      :page="page"
      :totalPage="totalPage"
    )
</template>


<script>
import entry from '@/pages/index/components/Entry';
import pagination from '@/pages/index/components/Pagination';

export default {
  props:['page'],
  components: {
    entry,
    pagination,
  },
  
  data(){
    return {
      totalPage: null,
    }
  },

  mounted() {
    this.getTotalPage();
  },

  methods: {
    getTotalPage() {
      this.$api.article.getTotalPage().then(res => {
        this.totalPage = res.data.data;
      })
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
