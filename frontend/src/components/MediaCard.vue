<template>
  <div class="media-card">
    <div class="image-header">
      {{media.name}}
      <img @click="showOptions = !showOptions" class="upload-menu" src="../assets/dots.svg">
      <div v-if="showOptions" class="upload-options">
        <div @click="edit(media)">edit</div>
        <div @click="remove(media)">remover</div>
      </div>
    </div>
    <img 
      class="item-image" 
      :src="media.url" 
      v-if="media.url && media.url.indexOf('youtube') < 0"/>
    <Video class="item-image" :url="media.url"/>
  </div>
</template>
<script>
import Video from '../components/Video'

export default {
  name: 'MediaCard',
  data () {
    return {
      showOptions: false
    }
  },
  methods: {
    edit (media) {
      this.$emit('edit', media)
      this.showOptions = !this.showOptions
    },
    remove (media) {
      this.$emit('remove', media)
      this.showOptions = !this.showOptions
    }
  },
  props: {
    media: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Video
  }
}

</script>
<style>

.media-card {
  width: 100%;
}

.wrapper-options {
  width: 100%;
  height: 75px;
}

.upload-options {
  position: absolute;
  right: 0;
  bottom: -200%;
  padding: 10px;
  min-width: 100px;
  height: auto;
  border: 1px solid #353535;
  border-radius: 4px;
  z-index: 999;
  background-color: white;
}

.upload-options div {
  cursor: pointer;
  font-weight: bold;
  margin: 10px;
}


.upload-menu {
  margin-left: auto;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}



.item-image {
  width: 100%;
  max-height: 100%;
  fill: #353535;
}

.image-header {
  width: 100%;
  min-height: 75px;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  position: relative;  
}

</style>
