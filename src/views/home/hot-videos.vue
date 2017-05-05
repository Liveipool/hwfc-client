<template>
  <div>
    <div class="hot-videos-title" @click="goToVideos">视频专区</div>
    <div class="hot-videos-video-covers">
      <img v-for="(video, index) in videos" class="hot-videos-video-cover" :src="video.cover" @click="showVideoDialog(index)">
    </div>
    <el-dialog v-model="showVideo" custom-class="hot-videos-dialog" @close="stopPlaying">
      <d-player ref="player" :video="videos[0]" class="hot-videos-video" :hotkey="false" :loop="false"></d-player>
    </el-dialog>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'

export default {
  name: 'hotVideos',
  props: ['videos'],
  data () {
    return {
      showVideo: false
    }
  },
  components: {
    'd-player': VueDPlayer
  },
  methods: {
    showVideoDialog (index) {
      this.showVideo = true
      this.$nextTick(() => {  // dom更新以后，才能从$refs里找到播放器
        this.$refs.player.dp.switchVideo(this.videos[index])
        this.$refs.player.dp.play(0)
      })
    },
    stopPlaying () {
      this.$refs.player.dp.pause()
    },
    goToVideos () {
      window.location = '/#/videos'
    }
  }
}
</script>

<style scoped>
.hot-videos-title {
  font-family: ArialMT;
  font-size: 20px;
  width: 110px;
  margin: 0 auto;
  padding: 8px 11px;
  border-bottom: 2px solid #39f;
  margin-bottom: 17px;
  color: #475669;
  cursor: pointer;
}

.hot-videos-title:hover {
  color: #1F2D3D;
}

.hot-videos-video-covers {
  height: calc(100% - 67px);
  display: flex;
  justify-content: space-between;
}

.hot-videos-video-cover {
  height: 100%;
  width: 45%;
  cursor: pointer;
}

.hot-videos-video {
  height: 360px;
  width: 480px;
}

</style>

<style>
.hot-videos-dialog {
  width: 520px !important;
}
</style>
