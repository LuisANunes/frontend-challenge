<template>
  <ul v-if="hasTranscriptions">
    <li v-for="transcription in transcriptions" :key="transcription.id">
      {{ transcription.voice }}
      {{ transcription.text }}
    </li>
  </ul>
  <h3 v-else>No transcriptions available</h3>
</template>

<script>
export default {
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
