<script setup lang="ts">
import { usePlayerStore } from "./stores";
import { onMounted } from "vue";

const playerStore = usePlayerStore();

onMounted(() => {
  playerStore.load();

  setInterval(() => {
    playerStore.togglePlay()
  }, 2000);
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

