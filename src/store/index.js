import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      transcriptions: [
        {
          id: 1,
          voice: "Voice 2",
          text: "This is a one line sentence made to show how it fits"
        },
        {
          id: 2,
          voice: "Voice 1",
          text: "Lorem ipsum dolor sit amet 123"
        },
        {
          id: 3,
          voice: "Voice 1",
          text: "Lorem ipsum dolor sit amet 456"
        }
      ]
    };
  },
  mutations: {},
  actions: {},
  getters: {
    transcriptions({ transcriptions }) {
      return transcriptions;
    },
    hasTranscriptions({ transcriptions }) {
      return transcriptions && transcriptions.length > 0;
    }
  },
  modules: {}
});
