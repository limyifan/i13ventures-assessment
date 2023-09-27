<script lang="ts" setup>
import PlanCard from "~/components/results/PlanCard.vue";
import { PlanType } from "~/types/plan";
import AIBot from "~/components/widgets/AIBot.vue";

definePageMeta({
  middleware: "auth-no-re-enter",
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
    class="flex w-screen items-center justify-center px-4 py-6 sm:flex-col sm:gap-10 lg:h-screen lg:flex-row lg:gap-20"
  >
    <!--    plans div-->
    <div
      class="inline-flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-30 px-6 py-8 sm:order-1 sm:w-[90vw] md:w-[25rem] lg:order-none lg:w-[45rem]"
    >
      <p class="font-saira text-2xl font-bold text-white">
        Your Customized Financing Options
      </p>
      <p class="font-saira text-lg font-normal text-white">
        Based on your financial situation and goals, <br />We have customized 3
        mortgage/loan plans for you to consider:
      </p>
      <div class="flex w-full justify-between gap-4 sm:flex-col lg:flex-row">
        <PlanCard v-for="plan in plans" :plan="plan" />
      </div>
    </div>
    <!--    plans div-->
    <img
      alt="result"
      class="w-[30rem] sm:order-none lg:order-1"
      src="/img/result/result.png"
    />
    <AIBot :show-on-pc="true" />
  </div>
</template>

<style lang="scss" scoped></style>
