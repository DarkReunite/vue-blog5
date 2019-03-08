<template lang="pug">
  div#home
    header
      headerTop
    main
      div#content-area
        router-view
      div#widget-area
        widget
    footer
      footerBottom
</template>

<script>
import headerTop from '@/pages/index/components/Header';

import widget from '@/pages/index/components/Widget';
import footerBottom from '@/pages/index/components/Footer';

export default {
  components:{
    headerTop,
    widget,
    footerBottom
  }
}
</script>

<style lang="scss" scoped>

#home{
  max-width: 1320px;
  margin: 0 auto;
}


main{
  padding: 0 5%;

  #content-area{
    margin-bottom: 7em;
  }

  &::after{
    content: "";
    display: table;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }


}

header{
  padding: 2.6em 5%;
}

footer{
  font-size: 0.8rem;
  padding: 0 5% 3.5em;
}

@media screen and (min-width: 56.8em) {
  #content-area {
    float: left;
    margin-right: -100%;
    width: 70%;
  }

  #widget-area {
    font-size: 0.8rem;
    float: left;
    margin-left: 75%;
    padding: 0;
    width: 25%;
  }
}

@media screen and (min-width: 44em) {
  header{
    padding: 5.25em 5%;
  }
}




</style>
