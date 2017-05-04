<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <div id="hotImagesLayoutLarge" class="col-lg-7 visible-lg-inline-block">
        <hot-images id="hotImagesLarge"></hot-images>
      </div>
      <div id="hotImagesLayoutSmall" class="col-md-12 col-sm-12 col-xs-12 hidden-lg">
        <hot-images id="hotImagesSmall"></hot-images>
      </div>
      <div id="division" class="col-lg-1 visible-lg-inline-block">
        <div id="divisionLine"></div>
      </div>
      <div id="hotInformationsAndVideosLarge" class="col-lg-4 visible-lg-inline-block">
        <hot-informations id="hotInformationsLarge"></hot-informations>
        <hot-videos id="hotVideosLarge"></hot-videos>
      </div>
      <div id="hotInformationsAndVideosSmall" class="col-md-12 col-sm-12 col-xs-12 hidden-lg">
        <hot-informations id="hotInformationsSmall"></hot-informations>
        <hot-videos id="hotVideosSmall"></hot-videos>
      </div>
    </div>
  </div>
</template>

<script>
import hotImages from '@/views/home/hot-images'
import hotInformations from '@/views/home/hot-informations'
import hotVideos from '@/views/home/hot-videos'

export default {
  name: 'home',
  components: {
    'hot-images': hotImages,
    'hot-informations': hotInformations,
    'hot-videos': hotVideos
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  margin: 60px 0 80px 0;  
  padding: 0;
  height: 460px;
}

.row {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#hotImagesLayoutLarge,
#hotImagesLayoutSmall,
#division,
#hotInformationsAndVideosLarge {
  height: 100%;
  padding: 0;
  display: inline-block;
}

#hotImagesLayoutLarge {
  width: 57%;
  margin-bottom: 30px;
}

#hotImagesLarge {
  width: 73%;
  height: 460px;
  text-align: center;
  margin: 0 9% 0 18%;
}

#hotImagesLayoutSmall {
  width: 100%;
  height: 460px;
  margin-bottom: 30px;
  padding: 0 15px;
}

#hotImagesSmall {
  width: 658px;
  height: 460px;
  text-align: center;
  margin: 0 auto;
}

#division {
  width: 2px;
}

#divisionLine {
  width: 1px;
  height: 100%;
  background-color: #39f;
  display: inline-block;
  margin: 0 auto;
}

#hotInformationsAndVideosLarge {
  width: 42%;
}

#hotInformationsLarge,
#hotInformationsSmall {
  text-align: center;
}

#hotInformationsLarge {
  width: 73%;
  height: 200px;
  margin: 0 18% 0 9%;
}


#hotVideosLarge {
  width: 72%;
  height: 250px;
  margin: 10px 18% 0 10%;
}

#hotInformationsSmall {
  width: 658px;
  height: 200px;
  margin: 0 auto;
}

#hotVideosSmall {
  width: 658px;
  height: 250px;
  margin: 0 auto 20px auto;
}
</style>
