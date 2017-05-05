<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="4000">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div v-for="(url, index) in urls" class="item" :class="{active: index === 0}">
          <a href="/#/images"><img :src="url" :alt="`热点图片${index + 1}`"></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hotImages',
  props: ['urls'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#carousel-example-generic,
.carousel-inner,
.item,
.item img {
  width: 100% !important;
  height: 460px !important;
}

.carousel-indicators li {
  width: 14px;
  height: 14px;
  margin: 0 3px;
}
</style>
