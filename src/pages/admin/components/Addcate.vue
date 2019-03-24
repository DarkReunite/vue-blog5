<template lang="pug">
  v-container
    v-card
      v-card-title(primary-title) 
        span.headline 新增类别
      v-card-text
        div.category-main
          div.category-menu
            v-dialog(v-model="addDialog" max-width="500px")
              v-btn(color="blue-grey" slot="activator").white--text 添加
                v-icon(right dark) cloud_upload
              v-card
                v-card-title
                  div.headline 新增类别
                v-card-text
                  div.flex-between
                    div.flex-left
                      v-text-field(
                        prepend-icon="label"
                        append-icon="keyboard_return"
                        label="类别"
                        @keyup.enter="addCate"
                        v-model="cate")
                      
</template>

<script>
export default {
  data() {
    return {
      addDialog: false,
      cate: null,

    }
  },

  methods: {
    addCate() {
      this.$api.category.add(this.cate)
    }
  }
}
</script>
