<template>
  <div class="uploader-modal-container">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'Info',
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
  font-size: 30px;
  padding: 25px;
}

</style>
