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

const borderOne = ref(null);
const borderTwo = ref(null);
const borderThree = ref(null);

const toggleMobileDropdownMenu = () => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("active");
  const outlineBorder = document.querySelector(".outline-border");
  outlineBorder.classList.toggle("active");
  borderOne.value.classList.toggle("rotateDown");
  borderTwo.value.classList.toggle("active");
  borderThree.value.classList.toggle("rotateUp");
  const submenu = document.querySelector(".submenu");
  submenu.classList.remove("expand");
};

const toggleSubMenu = () => {
  const arrowDown = document.querySelector(".arrow-down");
  arrowDown.classList.toggle("active");
  const submenu = document.querySelector(".submenu");
  submenu.classList.toggle("expand");
};
</script>

<template>
  <div class="flex w-screen items-center justify-between sm:px-4 md:px-10 py-4 relative">
    <!--    lef-col-->
    <div class="flex items-center">
      <NuxtLink to="/">
        <img alt="logo-full" class="w-52" src="/img/logo_full.png" />
      </NuxtLink>

      <!--      nav links-->
      <div class=" items-center gap-4 sm:hidden md:flex" >
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
    <div class=" items-center gap-4 sm:hidden lg:flex">
      <NuxtLink class="underline" to="/login">Login</NuxtLink>
      <Button text="Signup" />
    </div>
    <!--    right-col-->

<!--//////////////   Mobile Navbar    //////////-->
    <!--      mobile nav toggle div-->
    <div
        class="outline-border bg-teal-500 relative flex h-8 w-8 gap-[0.2rem] rounded border md:hidden"
        @click="toggleMobileDropdownMenu"
    >
      <div ref="borderOne" class="inline-border-one inline-border" />
      <div ref="borderTwo" class="inline-border-two inline-border" />
      <div ref="borderThree" class="inline-border-three inline-border" />
    </div>
    <!--      mobile nav toggle div-->
    <!--      mobile dropdown menu-->
    <div class="dropdown-menu flex w-screen flex-col items-center gap-8 bg-zinc-100 pl-2">
      <NuxtLink
          class=" font-plus text-2xl font-bold leading-10 tracking-widest text-black"
          @click.prevent="toggleMobileDropdownMenu"
          to="/"
          v-for="(link,i) in links"
          :style="`padding-top:${i===0?'2rem':'0'}`"
      >
        {{link.name}}
      </NuxtLink>
      <!--      mobile dropdown menu-->
    </div>
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


.dropdown {
  overflow: hidden;
  height: 0;
}

.dropdown-link {
  text-decoration: none !important;
}

.dropdown-link:hover {
  color: var(--primary-1, #ffbe34);
  transition: 0.2s ease-in-out all;
}

.outline-border {
  border-color: white;
  transition: 0.2s ease-in-out all;
}

.outline-border.active {
  border-color: transparent;
}

.inline-border {
  width: 1rem;
  height: 0.15rem;
  background: white;
  border-radius: 2px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inline-border-one {
  top: 30%;
  transition: 0.2s ease-in-out all;
}

.inline-border-two {
  top: 50%;
  opacity: 1;
  transition: 0.2s ease-in-out all;
}

.inline-border-three {
  top: 70%;
  transition: 0.2s ease-in-out all;
}

.inline-border-two.active {
  opacity: 0;
}

.rotateDown {
  top: 50%;
  width: 1.2rem;
  transform: translate(-50%, -50%) rotate(45deg);
}

.rotateUp {
  top: 50%;
  width: 1.2rem;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.dropdown-menu {
  height: 0%;
  transition: 0.2s ease-in-out all;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999;

  a {
    display: none;
  }

  .menu-item {
    display: none;
  }
}

.dropdown-menu.active {
  height: calc(100vh - 3.5rem);
  transition: 0.2s ease-in-out all;

  a {
    display: block;
  }

  .menu-item {
    display: flex;
  }
}

.submenu {
  transition: 0.2s ease-in-out all;
  display: none;

  a {
    display: none;
  }
}

.expand {
  display: flex;

  a {
    display: block;
  }
}

.arrow-down {
  transform: rotate(0deg);
  transition: 0.2s ease-in-out all;
}

.arrow-down.active {
  transform: rotate(180deg);
}
</style>
