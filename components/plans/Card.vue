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
    class="card flex flex-col rounded-2xl bg-white sm:h-80 sm:basis-[66%] lg:h-[18rem] lg:basis-[26%] xl:h-[28rem] xl:basis-[20%]"
  >
    <!--  background image-->
    <div
      :style="`background: url('${img}')`"
      class="test w-full flex-1 rounded-t-2xl bg-red-500"
    ></div>
    <!--  background image-->

    <div class="flex flex-1 flex-col px-2 pt-4">
      <p
        class="font-saira text-lg font-semibold leading-9 text-slate-700 xl:text-2xl"
      >
        {{ title }}
      </p>
      <p
        class="leading-0 font-saira text-xs font-normal text-slate-700 xl:text-lg"
      >
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
