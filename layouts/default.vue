<script setup></script>

<template>
  <div class="flex h-screen flex-col md:h-screen">
    <Header />
    <div
      class="h-full grow overflow-x-hidden bg-cover bg-center bg-no-repeat sm:bg-[#211084] lg:overflow-y-hidden lg:bg-[url('/img/index/bg.png')]"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
