<script lang="ts" setup>
const props = defineProps({
  text: String,
  icon:String
});
</script>

<template>
  <div
    class="inline-flex items-center justify-center rounded-[10px] border-2 bg-gradient-to-r from-blue-900 to-violet-500 px-4 py-2 gap-2"
  >
    <img :src="`/svg/${icon}.svg`" alt="icon" class="w-5 h-5" v-if="icon"/>
    <p class="text-white text-md font-medium font-saira leading-snug">
      {{text}}
    </p>

  </div>
</template>

<style lang="scss" scoped></style>
