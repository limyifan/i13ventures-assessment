<template>
  <Html>
  <Body>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
    <NuxtPage />
  </NuxtLayout>
  </Body>
  </Html>
</template>
<script setup>

useHead({
  title: "i13ventures",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "i13ventures",
      name: "i13ventures",
      content: "i13ventures",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});

onMounted(() => {
});
</script>
<style lang="scss">
body {
  margin: 0;
}

p {
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

a {
  text-decoration: none;
}
</style>
