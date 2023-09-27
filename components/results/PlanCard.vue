<script setup lang="ts">
import Button from "~/components/widgets/Button.vue";
import {PlanType} from "~/types/plan";
const props=defineProps<{
  plan:PlanType
}>()
</script>

<template>
  <div class="flex-1 h-72 bg-white rounded-2xl shadow flex flex-col items-center px-4 py-4 gap-2">
    <div class="w-20 h-20 rounded-lg justify-center items-center inline-flex" :style="`background:${plan.color}`">
      <img :src="`/svg/${plan.icon}.svg`" alt="result" />
    </div>
    <p class="text-center text-slate-700 text-lg font-semibold font-saira leading-snug">{{plan.title}}</p>
    <p class=" text-slate-600 text-sm font-medium font-saira leading-snug">{{plan.desc}}</p>
<Button text="More Details"/>
    <div class=" text-slate-600 text-xs font-medium font-saira leading-snug">Monthly Payment: €{{plan.monthlyRepayment}}</div>
  </div>
</template>

<style scoped lang="scss">

</style>
