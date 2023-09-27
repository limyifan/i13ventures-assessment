<script lang="ts" setup>
import PlanCard from "~/components/results/PlanCard.vue";
import { PlanType } from "~/types/plan";

definePageMeta({
  middleware: "",
});

const plans: PlanType[] = [
  {
    icon: "result1",
    title: "30-year \n" + "fixed rate mortgage",
    desc: "Lowest interest rate, fixed payments",
    monthlyRepayment: 1432,
    color: "#DF385B",
  },
  {
    icon: "result2",
    title: "15-year \n" + "fixed rate mortgage",
    desc: "Shorter term, lower total interest",
    monthlyRepayment: 2145,
    color: "#2CD182",
  },
  {
    icon: "result3",
    title: "5/1 Adjustable\n" + " Rate Mortgage",
    desc: "Very low starting rate and payment",
    monthlyRepayment: 1170,
    color: "#FAB437",
  },
];
</script>

<template>
  <div
    class="flex w-screen items-center justify-center gap-20 px-4 py-6 sm:flex-col lg:flex-row h-screen"
  >
    <div
      class="inline-flex sm:w-[90vw] md:w-[25rem] lg:w-[45rem] flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-30 px-6 py-8"
    >
      <p class="font-saira text-2xl font-bold text-white">
        Your Customized Financing Options
      </p>
      <p class="font-saira text-lg font-normal text-white">
        Based on your financial situation and goals, <br />We have customized 3
        mortgage/loan plans for you to consider:
      </p>
      <div class="flex sm:flex-col lg:flex-row w-full justify-between gap-4">
        <PlanCard v-for="plan in plans" :plan="plan" />
      </div>
    </div>
    <img alt="result" class="w-[30rem]" src="/img/result/result.png" />
  </div>
</template>

<style lang="scss" scoped></style>
