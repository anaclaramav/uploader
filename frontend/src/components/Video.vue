<template>
  <div class="video-youtube" ref="video" v-if="theUrl">
    <iframe class="video-youtube" frameBorder="0" :src="theUrl" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  name: 'Video',
  data() {
    return {
      theUrl: ''
    }
  },
  props: {
    url: {
      type: String
    }
  },
  methods: {
    parseVideoURL(url) {

      let retVal = {}
 
      if (url.match('http(s)?://(www.)?youtube|youtu.be')) {
        if (url.match('embed')) {
          retVal.id = url.split(/embed\//)[1].split('"')[0]
        } else {
          retVal.id = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]
        }
        retVal.provider = 'youtube'
        retVal.videoUrl = 'https://www.youtube.com/embed/' + retVal.id + '?rel=0&modestbranding=1&showinfo=0'
        return retVal.videoUrl
      }

      return false

    },
    setUrl(url){
      this.theUrl = this.parseVideoURL(url)
    }
  },
  watch: {
    url(url){
      this.setUrl(url)
    }
  },
  created(){
    this.setUrl(this.url)
  }
}
</script>
<style>
.video-youtube {
  width: 100%;
  height: 250px;
}
</style>
