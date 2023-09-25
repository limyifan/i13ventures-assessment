<script lang="ts" setup>
const props = defineProps({
  text: String,
  icon: String,
});
</script>

<template>
  <div
    class="inline-flex min-w-[6rem] items-center justify-center gap-2 rounded-[5px] bg-gradient-to-r from-blue-900 to-violet-500 px-4 py-2 btn"
  >
    <img v-if="icon" :src="`/svg/${icon}.svg`" alt="icon" class="h-5 w-5" />
    <p class="text-md font-saira font-medium leading-snug text-white text-center">
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.btn{
  cursor: pointer;
  opacity: 1;
  transition: 0.15s all ease-in-out;
}
.btn:hover{
  opacity: 0.9;
  transform: scale(1.02);
}
</style>
