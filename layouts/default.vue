<script setup></script>

<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <Header />
    <div class="grow bg-[url('/img/index/bg.png')]">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
