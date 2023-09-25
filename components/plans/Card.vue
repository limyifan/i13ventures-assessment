<script lang="ts" setup>
const props = defineProps({
  img: String,
  title: String,
  desc: String,
  url: String,
});
</script>

<template>
  <NuxtLink
    :to="`/products${url}`"
    class="sm:basis-[66%] card flex h-80 flex-col rounded-2xl bg-white lg:basis-[26%]"
  >
    <!--  background image-->
    <div
      :style="`background: url('${img}')`"
      class="test w-full flex-1 rounded-t-2xl bg-red-500"
    ></div>
    <!--  background image-->

    <div class="flex flex-1 flex-col px-2 pt-4">
      <p class="font-saira text-xl font-semibold leading-9 text-slate-700">
        {{ title }}
      </p>
      <p class="text-md leading-0 font-saira font-normal text-slate-700">
        {{ desc }}
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.test {
  background-position: center !important;
}

.card {
  cursor: pointer;
  transition: 0.15s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
