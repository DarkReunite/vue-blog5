<template lang="pug">
  v-container
    v-card
      v-card-title(primary-title) 
        span.headline 显示类别
</template>

<script>
export default {
  mounted() {
    this.showCate();
  },
  methods: {
    showCate() {
      this.$api.category.show().then(res => {
        console.log(res.data);
      })
    }
  }
}
</script>

