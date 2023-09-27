<script lang="ts" setup>
import Button from "~/components/widgets/Button.vue";
import {useRouting} from "~/composables/useRouting";

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
const {viewCourses}=useRouting()

</script>

<template>
  <div class="flex w-screen items-center justify-between px-10 py-4">
    <!--    lef-col-->
    <div class="flex items-center">
      <NuxtLink to="/">
        <img alt="logo-full" class="w-52" src="/img/logo_full.png" />
      </NuxtLink>

      <!--      nav links-->
      <div class=" items-center gap-4 sm:hidden lg:flex" >
        <div
          v-for="(link, index) in links"
          :key="index"
          @click="viewCourses"
          class="text-md font-saira font-medium capitalize leading-relaxed text-gray-800 link"
        >
          {{ link.name }}
        </div>
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
.link{
  transition: .15s ease-in-out;
  cursor: pointer;
}
.link:hover{
  color: $primary;
}
.link:first-child{
  color:$primary
}
</style>
