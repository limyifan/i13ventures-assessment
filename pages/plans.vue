<script setup>
import Sidebar from "~/components/widgets/Sidebar.vue";
import Card from "~/components/plans/Card.vue";
import { usePlans } from "~/composables/usePlans";

definePageMeta({
  layout: "gradient",
});

const { plans } = usePlans();
</script>

<template>
  <div class="flex min-h-screen w-screen sm:flex-col md:flex-row">
    <Sidebar plan="Please select one of the products that you desired" />
    <div
      class="flex h-screen flex-1 flex-wrap items-center justify-center gap-4 overflow-y-scroll sm:px-2 sm:py-6 md:px-8 lg:py-0"
    >
      <Card
        v-for="plan in plans"
        :desc="plan.desc"
        :img="plan.img"
        :title="plan.title"
        :url="plan.url"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
