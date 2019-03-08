<template lang="pug">
  aside.sidebar
    //- section.widget
    //-   h2.widget-title search - 搜索文章
    section.widget
      h2.widget-title elsewhere - 妙妙屋之外
      ul.link-list
        li(v-for="item in links")
          a(:href="item.href") {{item.name}}
    section.widget
      h2.widget-title friends - 友情链接
      ul.link-list
        li(v-for="item in friends")
          a(:href="item.href") {{item.name}}
</template>

<script>
export default {
  data(){
    return {
      links: [
        {name: 'GitHub', href: 'https://github.com/DarkReunite'},
      ],

      friends: [
        {name: 'Lymon', href: 'http://lymon.top'},
        {name: '猫黑的游戏屋', href: 'https://nekokuro0xf.github.io/'},
      ]
      
    }
  }
}
</script>


<style lang="scss" scoped>

.widget{
  padding-top: 1.6em;
  border-top: 4px solid #f2f2f2;
  margin-bottom: 4em;

  .widget-title {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 1.3125em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .link-list{
    padding: 0;
    margin: 0 0 1.75em 1.25em;

    a {
      color: #c7c7c7;
      font-family: 'Merriweather';
      text-decoration: none;

      &:hover {
        color: #f2f2f2;
      }
    }
  }
}
</style>
