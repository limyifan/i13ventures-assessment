<script setup>
import Button from "~/components/widgets/Button.vue";

definePageMeta({
  layout: "gradient",
});
</script>

<template>
  <div
    class="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center sm:w-[70vw] md:w-[80rem] gap-10"
  >
    <img alt="ai-icon" src="/img/plans/ai.png" />
    <div class="text-center font-rowdies text-3xl font-normal text-white">
      Hi! I'm Bob, your personal assistant👋. <br />I'll be guiding you through
      your onboarding process. <br />Let's get started!
    </div>
    <NuxtLink to="/plans">
      <Button text="Next" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
</style>
