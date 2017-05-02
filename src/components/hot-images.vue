<template>
  <div id="hotImages">
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
        <div class="item active">
          <a href="/#/images"><img src="/static/home/1.jpg" alt="1.jpg"></a>
        </div>
        <div class="item">
          <a href="/#/images"><img src="/static/home/2.jpg" alt="2.jpg"></a>
        </div>
        <div class="item">
          <a href="/#/images"><img src="/static/home/3.jpg" alt="3.jpg"></a>
        </div>
        <div class="item">
          <a href="/#/images"><img src="/static/home/4.jpg" alt="4.jpg"></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hotImages',
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
  width: 658px !important;
  height: 460px !important;
}

.carousel-indicators li {
  width: 14px;
  height: 14px;
  margin: 0 3px;
}
</style>
