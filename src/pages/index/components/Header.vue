<template lang="pug">
  div.site-header
    div.site-header-main
      div.site-branding
        h1.site-title 
          a(href="/") {{websiteName}}
        p.site-descripion {{description}}
      div.site-header-menu
        nav.main-navigation
          div.menu-header-container
            ul.menu-header.clearfix
              li.menu-item
                a(href="/") 首页
              li.menu-item
                a(href="/") 关于妙妙屋
              li.menu-item
                a(href="/admin") 后台管理
</template>

<script>
import {mapState} from 'vuex';

export default {
  data(){
    return {

    }
  },
  computed: mapState([
      'websiteName',
      'description'
    ])
}
</script>

<style lang="scss" scoped>

.site-header-main{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  .site-title{
    margin: 0;

    a {
      color: #f2f2f2;
      text-decoration: none;
    }
  }

  #menu-toggle{
      border-radius: 2px;
      display: none;
      color: #f2f2f2;
      font-size: 0.9em;
      font-weight: 700;
      margin: 1em 0;
      padding: 0.77em;
      letter-spacing: 0.04em;
      border: 1px solid rgba(242, 242, 242, 0.2);
      background-color: transparent;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: #c7c7c7;
        border-color: #c7c7c7;

      }

      &:focus {
        color: #c7c7c7;
        border-color: #c7c7c7;
      }
  }
  
  .site-branding{
    margin-top: 1.75em;
    margin-bottom: 1.75em;
    margin: 0.875em auto 0.875em 0;
    max-width: 100%;
    overflow: hidden;

    .site-title{
      font-size: 1.4rem;
    }

    .site-descripion{
      display: none;
      font-size: 0.9rem;
      margin: 0.5em 0 0;
    }
  }

  .site-header-menu{
    margin-top: 1.75em;
    margin-bottom: 1.75em;
    flex: 0 1 auto;
    margin: 1.3125em 0;

    
  }
}

nav.main-navigation{
  margin: 0 -0.875em;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }



  .clearfix::after {
    content: "";
    display: table;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  li.menu-item {
    float: left;
    
    a{
      text-decoration: none;
      position: relative;
      color: #f2f2f2;
      padding: 0.65625em 0.875em;
      display: block;

      .iconfont {
        position: absolute;
        right: 0.625em;
        top: 0.8125em;
      }
    }
  }

}


@media screen and (min-width: 61.5em) {
  .site-title{
    font-size: 1.75rem !important;
  }


}

@media screen and (min-width: 44em) {
  .site-descripion{
    display: block !important;
  }
}

@media screen and (max-width: 44em) {
  .site-header-menu {
    flex: 0 1 100% !important;
    
    nav.main-navigation {
      margin: 0;

      ul.menu-header{
        border-bottom: 1px solid #d1d1d1;
        border-color: rgba(242, 242, 242, 0.2);

        li.menu-item {
          float: none;
          border-top: 1px solid #d1d1d1;
          border-color: rgba(242, 242, 242, 0.2);

          a {
            padding: 0.85em 0;
          }
        }
      }

    }
  }

}


</style>
