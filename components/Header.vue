<script lang="ts" setup>
import Button from "~/components/widgets/Button.vue";

definePageMeta({
  layout: "nav",
});

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Insurances",
    path: "/insurances",
  },
  {
    name: "Mortgages & Loans",
    path: "/mortgagesLoans",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Support",
    path: "/support",
  },
];
</script>

<template>
  <div class="flex w-screen items-center justify-between px-10 py-4">
    <!--    lef-col-->
    <div class="flex items-center">
      <img alt="logo-full" class="w-52" src="/img/logo_full.png" />

      <!--      nav links-->
      <div class=" items-center gap-4 sm:hidden lg:flex" >
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          class="text-md font-saira font-medium capitalize leading-relaxed text-gray-800"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <!--      nav links-->

    </div>
    <!--    lef-col-->

    <!--    right-col-->
    <div class="flex items-center gap-4">
      <NuxtLink class="underline" to="/login">Login</NuxtLink>
      <Button text="Signup" />
    </div>
    <!--    right-col-->
  </div>
</template>
<style lang="scss" scoped>
.router-link-active {
  text-decoration-color: $primary!important;
}

</style>
