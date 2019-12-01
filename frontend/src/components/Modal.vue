<template>
  <div class="uploader-modal-container">
    <input type="text" @input="e => text = e.target.value">
    <button @click="emitData">submit</button>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    emitData () {
      if (!this.text) {
        return
      }
      this.$emit('input', {
        url: this.text,
        name: new Date().valueOf()
      })
    }
  }
}
</script>
<style>
.uploader-modal-container {
  border: 1px solid #353535;
  width: 80%;
  right: 10%;
  min-height: 200px;
  background-color: white;
  border-radius: 4px;
  z-index: 999;
  margin: 20px;
  box-sizing: border-box;
}

.uploader-modal-container input, button {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
}
</style>
