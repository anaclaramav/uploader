<template>
  <div id="app" class="uploader">
    <Modal class="uploader-modal" v-if="showModal" @input="value => editable ? updateVideo(editable, value) : saveVideo(value)"/>
    <div class="uploader-header">
      uploader
    </div>
    <div class="container mediaContainer">
      <div class="row center">
        <div class="col-sm-6 image-wrapper" v-for="(item, i) in medias" :key="i">
          <MediaCard 
            :key="i" 
            @remove="media => isVideo(media.url) ? deleteVideo(media) : deleteImage(media)"
            @edit="media => isVideo(media.url) ? editModal(media) : edit(media)" 
            :media="item"/>
        </div>
        <input ref="editInput" hidden type="file" accept="image/*" @change="completeUpdate($event)"/>
      </div>
    </div>
    <div class="filePicker video"  @click="showModal = !showModal">
      <img class="video-icon" src="./assets/video.svg">
    </div>
    <FilePicker ref="picker" @file="value => addMedia(value)" class="filePicker"/>
  </div>
</template>
<script>

import FilePicker from './components/FilePicker'
import MediaCard from './components/MediaCard'
import Modal from './components/Modal'
import firebase from 'firebase'

export default {
  name: 'App',
  data ( ) {
    return {
      medias: null,
      editMedia: null,
      showModal: false,
      editable: false
    }
  },
  methods: {
    editModal (media) {
      this.showModal = !this.showModal
      this.editable = media
    },
    isVideo (url) {
      return !!(url.indexOf('youtube') > 0)
    },
    async saveVideo (options) {
      await fetch('http://localhost:3006/videos', {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
      });

      this.medias.push(options)

      this.showModal = false
    },
    async saveImage (url, name) {
      await fetch('http://localhost:3006/images', {
        method: 'POST', 
        mode: 'cors', 
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ url, name })
      });
    },
    async updateImage (url, old) {
      await fetch('http://localhost:3006/images', {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, old })
      });
    },
    async updateVideo (media, newItem) {
      await fetch('http://localhost:3006/videos', {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: newItem.url , old: media.url })
      });

      this.medias = await this.medias.map(item => {
        if (item.url == media.url) {
          return {
            name,
            url: newItem.url
          }
        }
        return item
      })

      this.editable = false
      this.showModal = false
    },
    async deleteImage (media) {
      await fetch('http://localhost:3006/images', {
        method: 'DELETE', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: media.url })
      });
      await this.remove(media)      
    },
    async deleteVideo (media) {
      await fetch('http://localhost:3006/videos', {
        method: 'DELETE', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: media.url })
      });
      this.medias = await this.medias.filter(item => {
        if (item.name == media.name) {
          return false
        }
        return true
      })
    },
    async fetchMedia () {
      try {
        const response = await fetch('http://localhost:3006/medias', {
          method: 'GET', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.medias = await response.json()
      } catch (e) {
        return e
      }
    },
    async addMedia (value) {

      let storageRef = firebase.storage().ref()

      let name = new Date().valueOf().toString()

      let imageRef = storageRef.child(name);

      await imageRef.putString(value.url, 'data_url')

      const url = await imageRef.getDownloadURL()

      this.medias.push({
        name,
        url
      })

      await this.saveImage(url, name)

    },
    async completeUpdate (e) {
      e.value = null
      let files = e.target.files
      let reader = new FileReader()
      reader.readAsDataURL(files[0])

      const result = await new Promise((resolve) => {
        reader.onload = e => {
          resolve(e.target.result);
        }
      })

      let storageRef = firebase.storage().ref()

      let name = this.editMedia.name
      
      let imageRef = storageRef.child(name)

      await imageRef.putString(result, 'data_url')

      const url = await imageRef.getDownloadURL()

      console.log({
        name, url
      })

      this.medias = await this.medias.map(item => {
        if (item.name == this.editMedia.name) {
          return {
            name,
            url
          }
        }
        return item
      })

      this.updateImage(url, this.editMedia.url)

      this.editMedia = null
    },
    async edit (media) {

      console.log('here')

      this.editMedia = media

      let storageRef = firebase.storage().ref()
      let imageRef = storageRef.child(media.name);
      await imageRef.delete()

      this.$refs['editInput'].click()

    },
    async remove (media) {

      let storageRef = firebase.storage().ref()
      let imageRef = storageRef.child(media.name);
      await imageRef.delete()

      this.medias = await this.medias.filter(item => {
        if (item.name == media.name) {
          return false
        }
        return true
      })

      await this.deleteImage(media.url)

    }
  },
  components: {
    FilePicker,
    MediaCard,
    Modal
  },
  async created () {
    this.fetchMedia()
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

.uploader-modal { 
  position: absolute;
  top: 25%;
  padding: 100px;
  font-size: 2em;
  height: auto;
}

.image-wrapper {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 5%;
  height: 500;
  align-content: flex-start;
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

.video {
  width: 50%;
  height: auto;
  min-height: 63px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  font-size: 14px;
}

.video-icon {
  height: 90%;
  cursor: pointer;
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
  height: 100px;
  align-self: flex-end;
  position: fixed;
  bottom: 0vh;
  z-index: 999;
  background: white;
}

.video {
  margin-left: 50%;
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
  .filePicker, .video {
    height: 10vh;
    align-self: flex-end;
    position: fixed;
    bottom: 0vh;
    z-index: 999;
    background: white;
  }
  
}
</style>
