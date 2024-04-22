<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
const { data } = useFetch("/api", {
  immediate: true,
});
</script>
