<template lang="pug">
  v-navigation-drawer(permanent app)
    v-toolbar(flat)
    v-list
      v-list-tile(v-for="(item, index) in list" :key="item.title" :to="item.to")
        v-list-tile-action
          v-icon {{item.icon}}
        v-list-tile-content
          v-list-tile-title {{item.title}}
</template>

<script>
export default {
  data(){
    return {
      list: [
        {title: '上传文章', icon: 'attach_file', to: '/admin/upload'},
        {title: '类别管理', icon: 'attach_file', to: '/admin/category'},
        {title: '网站信息', icon: 'attach_file', to: '/admin/info'}
      ]
    }
  }
}
</script>
