<script setup lang="ts">

</script>

<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
