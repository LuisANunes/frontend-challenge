<template>
  <ul v-if="hasTranscriptions">
    <transcription-item
      v-for="transcription in transcriptions"
      :key="transcription.id"
      :voice="transcription.voice"
      :text="transcription.text"
    ></transcription-item>
  </ul>
  <h3 v-else>No transcriptions available</h3>
  <a href="#" class="button--rounded" @click.prevent="newItem">
    <img src="@/assets/add-row.svg" alt="Add icon" />
  </a>
</template>

<script>
import TranscriptionItem from "./TranscriptionItem.vue";

export default {
  components: {
    TranscriptionItem
  },

  computed: {
    transcriptions() {
      return this.$store.getters.transcriptions;
    },
    hasTranscriptions() {
      return this.$store.getters.hasTranscriptions;
    }
  }
};
</script>
