<template>
  <button class="app-button" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    title: String,
    onClick: Function
  }
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
}
</style>
