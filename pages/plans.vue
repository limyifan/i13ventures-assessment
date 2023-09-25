<script setup>
import Sidebar from "~/components/widgets/Sidebar.vue";
import Card from "~/components/plans/Card.vue";
import {usePlans} from "~/composables/usePlans";

definePageMeta({
  layout: "gradient",
});

const {plans}=usePlans()
</script>

<template>
  <div class="flex min-h-screen w-screen sm:flex-col md:flex-row">
    <Sidebar />
    <div class="flex h-full flex-1 flex-wrap sm:px-2 md:px-8 items-center gap-4 justify-center sm:py-6 lg:py-0">
        <Card  v-for="plan in plans" :title="plan.title" :desc="plan.desc" :img="plan.img" :url="plan.url"/>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
