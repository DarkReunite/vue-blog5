<template lang="pug">
  div#info
    v-container
      v-card
        v-card-title(primary-title)
          span.headline 网站信息
        v-card-text
          v-layout(row align-center justify-center)
            v-flex.label-row(xs2)
              label.label-name 网站名称 :
            v-flex(xs5)
              v-text-field(v-model="websiteName")
          v-layout(row align-center justify-center)
            v-flex.label-row(xs2)
              label.label-name 网站描述 :
            v-flex(xs5)
              v-text-field(v-model="description")
          v-layout(row align-center justify-center)
            v-flex.label-row(xs2)
              label.label-name 站长名称 :
            v-flex(xs5)
              v-text-field(v-model="master")
        v-card-actions
          v-spacer
          v-btn(
            depressed 
            color="primary" 
            @click="setWebsiteInfo") 保存


</template>
<script>
export default {
  created() {
    this.getWebsiteInfo();
  },
  data() {
    return {
      websiteName: null,
      description: null,
      master: null
    }
  },
  methods: {
    getWebsiteInfo() {
      this.$api.user.getWebInfo().then(res => {
        console.log(res.data);
        
        if (res.data && res.data.data)
        {
          let webInfo = res.data.data;
          this.websiteName = webInfo.websiteName,
          this.description = webInfo.description,
          this.master = webInfo.master
        }
        
      })
    },

    setWebsiteInfo() {
      if (!this.websiteName || !this.description || !this.master) {
        alert("不能为空");
        return;
      }
      this.$api.user.setWebInfo(
        this.websiteName,
        this.description,
        this.master
      ).then(res => {
        console.log(res.msg);
        
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.label-row {
  text-align: right;
  .label-name {
    margin-right: 1.5em;
  }
}
</style>

