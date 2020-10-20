<template>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <img src="@/assets/person.svg" alt="Person icon" />
    <span>{{ voice }}</span>
    <span>{{ text }}</span>
    <a
      href="#"
      class="button--remove"
      title="Remove item"
      @click.prevent="removeItem"
    >
      <img src="@/assets/delete.svg" alt="Trash icon" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    voice: {
      type: String,
      required: true,
      default: ""
    },
    text: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>
