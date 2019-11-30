<template>
  <div class="picker">
    <input
      hidden
      type="file"
      ref="fileField"
      class="inputFile"
      accept="image/*"
      @change="onChange"
    />
    <div class="upload-bar">
      <img @click="pickFile()" class="upload-icon" src="../assets/upload.svg">
    </div>
  </div>
</template>

<script>

export default {
  name: 'FilePicker',
  props: {
    file: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      theFile: { name: '', url: undefined }
    }
  },
  methods: {
    upload () {
      if (this.theFile.url) {

        this.$emit('file', this.theFile.url)

        this.theFile = { name: '', url: undefined }
      }
    },
    shortName (name) {
      if (name.length <= 30) {
        return name
      }
      const splitedName = name.split('.')
      return `${name.slice(0, 24)}...${splitedName[splitedName.length - 1]}`
    },
    pickFile() {
      this.$refs['fileField'].click()
    },
    droppedFile(e) {
      e.stopPropagation()
      e.preventDefault()
      let files = e.dataTransfer.files
      this.createFile(files[0])
    },
    onChange(e) {
      e.value = null
      let files = e.target.files
      this.createFile(files[0])
    },
    formatSize (bytes) {
       const size = bytes/1000;
       if (parseInt(size).toString().length <= 3) {
         return `${size.toFixed(1)}KB`
       }
       if (parseInt(size).toString().length > 3) {
         return `${(size/1000).toFixed(1)}MB`
       }
       return '0.0MB' 
    },
    createFile(file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.theFile = {
          name: file.name,
          url: e.target.result,
          size: this.formatSize(file.size)
        }
      }
    },
    removeFile() {
      this.theFile = {}
    }
  },
  watch: {
    theFile (value) {
      this.$emit('file', value);
    },
    file (value) {
      this.theFile.name = value
    }
  },
  mounted() {
    this.$emit('file', this.theFile)
    this.theFile.name = this.file
  }
}
</script>

<style>
.picker {
  width: 100%;
  height: auto;
  min-height: 63px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  font-size: 14px;
  color: $default-text-color;
}
.fileItem {
  background-color: rgb(153, 194, 255);
  border: 1px solid rgb(102, 163, 255);
  color: #1c2e36;
  border-radius: 5px;
  padding: 10px;
  line-height: 3;
}
i {
  border-left: 1px solid rgb(102, 163, 255);
  margin-left: 8px;
  padding: 5px 5px 5px 10px;
  margin-top: 5px;
}
i::before {
  font-size: 20px;
  position: relative;
  bottom: top;
  top: 5px;
}
.upload-bar {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.upload-icon {
  height: 90%;
  cursor: pointer;
}

</style>