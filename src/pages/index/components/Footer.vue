<template lang="pug">
  div.site-info
    span.site-title
      a 米奇的妙妙屋
    span powered by Jackie Wong
</template>


<style lang="scss" scoped>
.site-title{
  a::after{
    content: '/';
    padding: 0 0.7em 0;
    opacity: 0.7;
  }
}
</style>
