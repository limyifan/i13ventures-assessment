<script setup lang="ts">

import SearchBox from "~/components/index/SearchBox.vue";
import {useLocalstorage} from "~/composables/useLocalstorage";

const router=useRouter()
const viewCourses = () => {
  const{getIsIntroPresented,setIsIntroPresented}=useLocalstorage()
  const isPresented =getIsIntroPresented()
  if(!isPresented){
    setIsIntroPresented(true)
    router.push("/intro")
  }
  else
  {
    router.push("/plans")
  }
};
</script>

<template>
<div class="flex items-center justify-between pl-10 sm:flex-col md:flex-row">
  <div class="flex flex-col sm:w-full md:w-[40rem]">
    <p class=" text-white text-opacity-80 text-lg font-semibold font-saira uppercase leading-tight tracking-widest">Smarter Coverage for Modern Life</p>
    <p class="text-white text-7xl font-normal font-rowdies leading-[5rem] mt-2">Insuring Your Tomorrow, Simplified Today</p>
<div class="flex items-center gap-8 my-20">
  <div @click="viewCourses" class="w-48 h-14 pr-px rounded-lg border-2 border-white justify-center items-center inline-flex view-plans-btn">
      <p class=" text-white text-lg font-semibold font-['Saira'] leading-7 tracking-wide ">View Plans</p>
  </div>
  <p class="  text-white text-lg font-medium font-['Saira'] leading-10">Get Free Consultation</p>
</div>
    <SearchBox/>
  </div>
  <div class="flex">
    <img src="/img/index/professional.png" alt="professional" class="w-[42rem]" />
  </div>
</div>
</template>

<style scoped lang="scss">
.view-plans-btn{
  background: rgba(255, 255, 255, 0);
  transition: .15s ease-in-out;
  cursor: pointer;
}
.view-plans-btn:hover{
  background: rgba(255, 255, 255, 0.1);
}
</style>
