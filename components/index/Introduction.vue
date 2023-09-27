<script lang="ts" setup>
import SearchBox from "~/components/index/SearchBox.vue";
import { useRouting } from "~/composables/useRouting";

const { viewCourses } = useRouting();
</script>

<template>
  <div
    class="flex items-center sm:flex-col sm:justify-center sm:px-4 sm:py-4 lg:flex-row lg:justify-between lg:px-10 lg:py-0 xl:justify-center"
  >
    <div class="flex flex-col sm:w-full md:w-[40rem]">
      <p
        class="text-md font-saira font-semibold uppercase leading-tight tracking-widest text-white text-opacity-80"
      >
        Smarter Coverage for Modern Life
      </p>
      <p
        class="my-6 font-rowdies font-normal leading-[5rem] text-white sm:text-5xl lg:text-5xl"
      >
        Insuring Your Tomorrow, Simplified Today
      </p>
      <div class="my-5 flex items-center gap-8">
        <div
          class="view-plans-btn inline-flex h-14 w-48 items-center justify-center rounded-lg border-2 border-white pr-px"
          @click="viewCourses"
        >
          <p
            class="font-['Saira'] text-lg font-semibold leading-7 tracking-wide text-white"
          >
            View Plans
          </p>
        </div>
        <p class="font-saira text-lg font-medium leading-10 text-white">
          Get Free Consultation
        </p>
      </div>
      <SearchBox class="mt-4" />
    </div>
    <img
      alt="professional"
      class="sm:w-full lg:w-[42rem]"
      style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) brightness(0.9); "
      src="/img/index/professional.png"
    />
  </div>
</template>

<style lang="scss" scoped>
.view-plans-btn {
  background: rgba(255, 255, 255, 0);
  transition: 0.15s ease-in-out;
  cursor: pointer;
}

.view-plans-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
