<template lang="pug">
  nav.pagination
    div.nav-links
      span(v-if="parseInt(page) > 1 " ) 
        router-link(to="/") 1
      span(v-if="parseInt(page) - 2 > 1") ...
      span(v-if="parseInt(page) - 1 > 1") 
        router-link(:to="{path: `/page/${parseInt(page) - 1}`}") {{ parseInt(page) - 1 }}
      span.current {{page}}
      span(v-if="parseInt(page) + 1 < totalPage") 
        router-link(:to="{path: `/page/${parseInt(page) + 1}`}") {{ parseInt(page) + 1 }}
      span(v-if="parseInt(page) + 2 < totalPage") ...
      span(v-if="parseInt(page) < totalPage") 
        router-link(:to="{path: `/page/${parseInt(totalPage)}`}") {{totalPage}}
      div.arrow.left-arrow
        router-link.enabled.iconfont.icon-arrowsleftline(:to="{path: `/page/${parseInt(page) - 1}`}" v-if="parseInt(page) > 1")
        a.disable.iconfont.icon-arrowsleftline(v-else)
      div.arrow.right-arrow
        router-link.enabled.iconfont.icon-arrowsrightline(:to="{path: `/page/${parseInt(page) + 1}`}" v-if="parseInt(page) < totalPage")
        a.disable.iconfont.icon-arrowsrightline(v-else)
 

</template>

<script>
export default {
  props: ['page', 'totalPage'],
  data() {
    return {

    }
  },

  methods: {

  },


}
</script>


<style lang="scss" scoped>
.pagination{
  border-top: 4px solid #f2f2f2;

  .current {
    font-size: 1.2em !important;
    color: #f2f2f2 !important;
  }

  .nav-links {
    position: relative;

    & > span {

      color: #c7c7c7;
      font-size: 1.2em;
      display: inline-block;
      padding: 0.8em 0.7em;
      margin: 0 0.7em 0 -0.7em;
      
      a {
        color: #c7c7c7;
        text-decoration: none;
      }
    }

    .arrow {
      display: inline-block;
      position: absolute;
      width: 53px;
      height: 53px;

      a {
        color: #4d545c;
        text-decoration: none;
        font-size: 20px;
        text-align: center;
        line-height: 53px;
        display: inline-block;
        width: 53px;
        height: 53px;
        background-color: #f2f2f2;
      }

      a.enabled:hover{
        background-color: #c0c0c0;
      }

      a.disable {
        color: #c7c7c7;
      }
    }

    .left-arrow {
      right: 55px;
    }

    .right-arrow {
      right: 0;
    }
  }
  
    

  
}
</style>
