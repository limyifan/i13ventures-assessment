<script lang="ts" setup>
import Button from "~/components/widgets/Button.vue";
</script>

<template>
  <div
    class="flex items-center bg-white px-5 md:pt-4 sm:h-20 sm:w-screen sm:flex-row md:h-full md:w-80 md:flex-col"
  >
    <NuxtLink to="/">
      <img alt="logo" class="h-10 md:mb-20" src="/img/logo_full.png" />
    </NuxtLink>
    <img
      alt="ai"
      class="sm:h-10 md:h-15"
      src="/img/plans/ai.png"
    />
    <p
      class="mb-12 mt-8 font-rowdies text-xl font-normal text-black sm:hidden md:block"
    >
      Please select one of the products that you desired
    </p>
    <textarea
      class="w-full items-center justify-start rounded-md bg-white p-2 shadow sm:hidden md:block"
      placeholder="Get Help from Bob by writing your queries here"
      rows="8"
    />
    <Button class="mt-4 w-32 sm:hidden md:block" text="Submit" />
    <Button class="w-20 ml-2 sm:block md:hidden" text="Ask Bob" />
  </div>
</template>

<style lang="scss" scoped></style>
