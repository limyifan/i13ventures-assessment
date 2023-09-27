<script setup></script>

<template>
  <div class="flex h-screen flex-col ">
    <Header />
    <div class="grow bg-[url('/img/index/bg.png')] bg-cover bg-no-repeat bg-center overflow-x-hidden lg:overflow-y-hidden">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
