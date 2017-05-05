<template>
  <div>
    <el-tabs id="hotInformationsTabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane id="notices" label="预告" name="notices">
        <div id="noticesTime">{{notice.time}}</div>
        <div id="noticesContent">{{notice.content}}</div>
      </el-tab-pane>
      <el-tab-pane id="essays" label="文章" name="essays">
        <div id="essaysTitle">{{essay.title}}</div>
        <div id="essaysBrief">{{essay.brief}}</div>
        <div id="essaysUploadTime">{{essay.uploadTime}}</div>
        <div id="essaysAuthor">{{essay.author}}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'hotInformations',
  props: ['notice', 'essay'],
  data () {
    return {
      activeName: 'notices'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style scoped>
#noticesTime {
  font-family: ArialMT;
  font-size: 22px;
  text-align: center;
  margin-top: 11px;
}

#noticesContent {
  font-family: ArialMT;
  font-size: 19px;
  text-align: left;
  margin: 10px 15px 0 15px;
}

#essaysTitle {
  font-family: ArialMT;
  font-size: 17px;
  text-align: center;
}

#essaysBrief {
  font-size: 15px;
  text-align: left;
  margin: 0 11px;
}

#essaysAuthor,
#essaysUploadTime {
  display: inline-block;
  float: right;
  font-size: 14px;
  color: #808080;
  margin: 5px 15px 0 5px;
}
</style>

<style>
#hotInformationsTabs > .el-tabs__header {
  width: 227px !important;
  margin: 0 auto 7px auto !important;
  border: 0 !important;
}

#hotInformationsTabs > .el-tabs__content {
  height: 151px;
  padding: 11px 0 5px 0;
}

#hotInformationsTabs > .el-tabs__header .el-tabs__nav .el-tabs__item {
  font-size: 20px !important;
}

#hotInformationsTabs > .el-tabs__header .el-tabs__nav .el-tabs__item.is-active {
  color: #475669 !important;
}

#hotInformationsTabs > .el-tabs__header .el-tabs__nav .el-tabs__item:nth-child(2) {
  padding-left: 30px;
  padding-right: 35px;
}

#hotInformationsTabs > .el-tabs__header .el-tabs__nav .el-tabs__item:nth-child(3) {
  padding-left: 35px;
  padding-right: 30px;
}

#hotInformationsTabs > .el-tabs__header .el-tabs__nav .el-tabs__active-bar {
  background-color: #39f !important;
  height: 2px !important;
}
</style>
