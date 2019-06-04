<template lang="pug">
  v-app
    navDrawer
    toolBar
    v-content
      router-view
</template>

<script>
import toolBar from '@/pages/admin/components/Toolbar';
import navDrawer from '@/pages/admin/components/Navdrawer';

export default {
  components:{
    toolBar,
    navDrawer,
  },
  created(){
    this.$api.user.authToken()
  }
}
</script>

<style lang="scss" scoped>

</style>
