<template lang="pug">
  div#category_menu
    addCate
    categoryList
</template>

<script>
import addCate from '../components/Addcate';
import categoryList from '../components/Categorylist';

export default {
  components: {
    addCate,
    categoryList
  }
}
</script>