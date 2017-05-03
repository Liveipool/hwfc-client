<template>
  <div>
    <el-tabs id="hotInformationsTabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane id="notices" label="预告" name="notices">
        <div id="noticesTime">{{noticesTime}}</div>
        <div id="noticesContent">{{noticesContent}}</div>
      </el-tab-pane>
      <el-tab-pane id="essays" label="文章" name="essays">
        <div id="essaysTitle">{{essaysTitle}}</div>
        <div id="essaysBrief">{{essaysBrief}}</div>
        <div id="essaysUploadTime">{{essaysUploadTime}}</div>
        <div id="essaysAuthor">{{essaysAuthor}}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'hotInformations',
  data () {
    return {
      activeName: 'notices',
      noticesTime: '5月23日晚19：00整',
      noticesContent: '在工学院小广场庆祝欧光文获得2017年诺贝尔眼睛最小奖。',
      essaysTitle: '如何评价中山大学HWFC？',
      essaysBrief: '混碗饭吃（HWFC）是Hello World Football Club的爱称，俱乐部成立于2010年9月30日，在此后的七年里，混碗饭吃拿下了校内所有比赛的冠军。然而，拿过冠军的队伍很多，但像混碗饭吃这样生生不息的球队只有一支，究竟是什么原因。。。',
      essaysUploadTime: '2017年5月4日发布',
      essaysAuthor: '李为'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
