<template>
  <div id="app" class="uploader">
    <div class="uploader-header">
      uploader
    </div>
    <div class="container mediaContainer">
      <div class="row center">
        <div class="col-sm-6 image-wrapper" v-for="(item, i) in media" :key="i">
          <div class="image-header">
            {{item.name}}
          </div>
          <img class="item-image" :src="item.url"/>
        </div>
      </div>
    </div>
    <FilePicker @file="value => addMedia(value)" class="filePicker"/>
  </div>
</template>
<script>

import FilePicker from './components/FilePicker'

export default {
  name: 'App',
  data ( ) {
    return {
      media: null
    }
  },
  methods: {
    addMedia (value) {
      this.media.push(value)
    }
  },
  components: {
    FilePicker
  },
  mounted () {
    this.media = []
  }
}
</script>

<style>

.uploader {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100vh;
}

.uploader-header {
  height: 15vh;
  width: 100%;
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #353535;
  color: #353535;
  padding: 5px;
  position: fixed;
  z-index: 999;
  background-color: white;
}

.image-header {
  width: 100%;
  min-height: 75px;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 5px;
}

.mediaContainer {
  width: 100%;
  margin-top: 15vh;
  height: 70vh;
  overflow-y: auto;
  margin-bottom: 100px;
  font-family: 'Nanum Gothic', sans-serif;
}

.filePicker {
  align-self: flex-end;
  position: fixed;
  bottom: 0vh;
  z-index: 999;
  background: white;
}

.uploader-card {
  height: 250px;
  position: relative;
  padding: 5px;
}

.image-wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 5%;
  height: 250px;
  
}

.item-image {
  width: 100%;
  fill: #353535;
}

@media screen and (max-width: 500px) {
  .uploader-header {
    height: 10vh;
    font-size: 2.5em;
    border-bottom: 1px solid #353535;
  } 
  .mediaContainer {
    margin-top: 10vh;
    height: 80vh;
  }
  .filePicker {
    height: 10vh;
    align-self: flex-end;
    position: fixed;
    bottom: 0vh;
    z-index: 999;
    background: white;
  }
  
}
</style>
