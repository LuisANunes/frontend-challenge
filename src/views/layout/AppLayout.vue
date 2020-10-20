<template>
  <the-header />
  <transcriptions-list />
</template>

<script>
import TheHeader from "../../components/layout/TheHeader.vue";
import TranscriptionsList from "../../components/transcriptions/TranscriptionsList.vue";

export default {
  components: {
    TheHeader,
    TranscriptionsList
  }
};
</script>
