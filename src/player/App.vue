<script setup lang="ts">
import { usePlayerStore, useAnimeStore } from "./stores";
import { onMounted } from "vue";

const playerStore = usePlayerStore();
const animeStore = useAnimeStore();

onMounted(() => {
  playerStore.load();
  animeStore.startAnimeHandler();
});
</script>

<template>
  <div>
    <div class="text-red-900 text-bold text-2xl p-4">
      Hello 世界! I'm running inside crunchyroll player! <br />
      {{ playerStore.state }} <br />
      {{ playerStore.currentProgress }}
    </div>
  </div>
</template>

