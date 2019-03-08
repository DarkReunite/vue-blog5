<template lang="pug">
  footer
    span 屋长
    span {{formatTime(createdAt)}}
    span {{category}}
    span.tags
      a(v-for='item in tags.tag_name') {{item}}
</template>

<script>
import moment from 'moment';

export default {
  props: ['createdAt', 'category', 'tags'],
  data() {
    return {

    }
  },

  methods: {
    formatTime(ISO_time){
      return moment(ISO_time, moment.ISO_8601).format('LL');
    }
  }
}
</script>


<style lang="scss" scoped>

footer {
  padding-top: 2.1em;

  span {
    display: inline-block;
    font-size: 0.8em;
    line-height: 1.6;
    margin-bottom: 0.5em;

    &:not(:last-child)::after{
      content: '/';
      padding: 0 0.7em 0;
      opacity: 0.7;
    }
  }

  .tags a {
    &:not(:last-child)::after{
      content: ', ';
    }
  }

}

@media screen and (min-width: 61.5em) {
  footer {
    padding: 0;
    margin: 0;
    float: left;
    width: 20%;

    span {
      display: block;
      &:not(:last-child)::after{
        content: '';
        padding: 0;
      }
    }
  }
}
</style>

