<script lang="ts" setup>
import Spinner from "~/components/widgets/Spinner.vue";
</script>

<template>
  <div
    class="bg fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-2"
  >
    <Spinner />
    <p class="font-plus text-xl font-semibold text-white">
      Calculating based on your answers...
    </p>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
