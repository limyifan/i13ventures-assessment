<script setup lang="ts">
import Button from "~/components/widgets/Button.vue";

</script>

<template>
  <div class="w-96  relative bg-white rounded-md shadow flex items-center px-4 py-1">
  <input placeholder="Tell us your idea" class="grow"/>
  <Button text="Search" icon="search"/>
</div>
</template>

<style scoped lang="scss">
input:focus, input:active, textarea:focus, textarea:active {
  outline: none;
}
</style>
