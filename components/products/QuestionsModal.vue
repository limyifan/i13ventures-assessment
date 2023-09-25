<script lang="ts" setup>
import Button from "~/components/widgets/Button.vue";
</script>

<template>
  <div
    class="inline-flex w-96 flex-col gap-10 rounded-2xl border border-black bg-neutral-100 shadow p-4"
  >
    <div class="font-rowdies text-xl font-normal text-black">
      Tell me your goals
    </div>
    <div class="font-rowdies text-md font-light text-black">
      What are you looking to accomplish with a new mortgage or loan? (examples:
      lower mortgage rate, cash out refinance, consolidate debt, home purchase
      loan)
    </div>
    <textarea
      class="rounded-md bg-white p-2"
      placeholder="Your answer"
      rows="6"
    />
    <div class="flex justify-end gap-2">
      <Button text="Previous" />
      <Button text="Next" />
    </div>

    <div class="text-center font-saira text-sm font-medium text-black">
      Step: 1/6<br />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
