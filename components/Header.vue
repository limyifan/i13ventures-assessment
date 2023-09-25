<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="nav">
    <div class="flex flex-row items-center justify-between header w-full">
      <img src="/img/logo.jpeg" alt="logo" class="logo" />
      <div class="flex flex-row items-center justify-between gap-4">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <div class="vertical-line"></div>
        <NuxtLink to="about"  class="nav-link">About</NuxtLink>
        <div class="vertical-line"></div>
        <NuxtLink to="service"  class="nav-link">Service</NuxtLink>
        <div class="vertical-line"></div>
        <NuxtLink to="contact"  class="nav-link">Contact</NuxtLink>
    </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header{
  .logo{
    width: 9.5625rem;
    height: 6.5rem;
  }
  .nav-link{
    color: #FFF;
    font-family: "Krub";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
  }
  .vertical-line{
    width: 0.0625rem;
    height: 1.1875rem;
    background: rgba(255, 255, 255, 0.20);
    margin: 0 1.88rem;
  }
}

</style>
<style scoped>
.router-link-active {
 text-decoration: underline;
  text-underline-offset: 1.5rem;
  text-decoration-color: #FFF;
}
</style>

