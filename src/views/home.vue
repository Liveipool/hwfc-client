<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <div id="hotImages" class="col-lg-7 visible-lg-inline-block">
        <hot-images id="hotImagesLarge"></hot-images>
      </div>
      <div id="hotImages" class="col-md-12 col-sm-12 col-xs-12 hidden-lg">
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

#hotImages,
#division,
#hotInformationsAndVideosLarge {
  height: 100%;
  padding: 0;
  display: inline-block;
}

#hotImages {
  margin-bottom: 30px;
}

#hotImagesLarge,
#hotImagesSmall {
  width: 658px;
  height: 460px;
  text-align: center;
}

#hotImagesLarge {
  margin: 0 36px 0 calc(100% - 694px);
}

#hotImagesSmall {
  margin: 0 auto;
}

#division {
  width: 2px;
}

#divisionLine {
  width: 2px;
  height: 100%;
  background-color: #39f;
  display: inline-block;
  margin: 0 auto;
}

#hotInformationsLarge,
#hotInformationsSmall {
  border: 1px solid #39f;
  text-align: center;
}

#hotInformationsLarge {
  width: 460px;
  height: 180px;
  margin: 0 calc(100% - 496px) 0 36px;
}


#hotVideosLarge {
  width: 460px;
  height: 250px;
  margin: 30px calc(100% - 496px) 20px 36px;
}

#hotInformationsSmall {
  width: 658px;
  height: 180px;
  margin: 0 auto;
}

#hotVideosSmall {
  width: 658px;
  height: 250px;
  margin: 30px auto 20px auto;
}

</style>
